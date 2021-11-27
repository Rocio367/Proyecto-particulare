import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validators,
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Usuario } from "src/app/shared/models/usuario";
import { UsuariosService } from "src/app/core/services/usuarios/usuarios.service";
import { Alumno } from 'src/app/shared/models/alumno';
import { Documento } from 'src/app/shared/models/documento';

@Component({
  selector: "app-registrar-alumno",
  templateUrl: "./registrar-alumno.component.html",
  styleUrls: ["./registrar-alumno.component.scss"],
})
export class RegistrarAlumnoComponent implements OnInit {

  nivelAcademico=[{name:'Primaria',value:'1'},{name:'Secundaria',value:'2'},{name:'Universitario',value:'3'},{name:'Terciario',value:'4'}]

  uploadedFiles: any[] = [];
  
  formDatos = this.form.group({
    nombre: ["", Validators.required],
    apellido: ["", Validators.required],
    documento: ["", Validators.required],
    email: ["", [Validators.email, Validators.required]],
    contrasenia: ["", Validators.required],
    repetirContrasenia: ["", Validators.required],
    telefono: ['',Validators.pattern(/^(0|\-?[1-9][0-9]*)$/)],
    fechaNacimiento: ["", Validators.required],
    fotoPerfil: [""],
    materiasInteres: [""],
    nivelAcademico: ["", Validators.required],
  });

  tiposDeArchivosPermitidos = ".png, .jpg, .jpeg";
  imagenPerfil = "";
  imagenDefault = "../../../../../assets/img/default-user.png";

  constructor(
    private form: FormBuilder,
    private usuariosService: UsuariosService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.formDatos.controls["fotoPerfil"].valueChanges.subscribe((archivo) => {
      const reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = () => {
        this.imagenPerfil = reader.result as string;
      };
    });
  }

  registrarAlumno() {
    if (this.formDatos.valid) {
      let usuario: Usuario;
      let alumno : Alumno;


      this.cargarArchivos(this.uploadedFiles)
        .then((archivos) => {
            usuario = {
              nombre: this.formDatos.controls["nombre"].value,
              apellido: this.formDatos.controls["apellido"].value,
              documento: this.formDatos.controls["documento"].value,
              email: this.formDatos.controls["email"].value,
              contrasenia: this.formDatos.controls["contrasenia"].value,
              telefono: this.formDatos.controls["telefono"].value,
              fechaNacimiento: this.formDatos.controls["fechaNacimiento"].value,
              fotoPerfil: archivos,
              id:null,
              rol:null
            }

      alumno = {
        materiasInteres: this.formDatos.controls["materiasInteres"].value,
        nivelAcademico:this.formDatos.controls["nivelAcademico"].value,
        usuario: usuario
      };

    //  console.log("la foto es" + alumno.usuario.fotoPerfil);

      this.usuariosService.registrarAlumno(alumno).subscribe(
        () => {
          this._snackBar.open('Perfil creado correctamente', "", {
            duration: 3000,
            horizontalPosition: "end",
            verticalPosition: "top",
            panelClass: ["green-snackbar"],
          });
          this.router.navigate(["/home"]);
          return true;
        },
        (error) => {
          //!= 200
          console.error("Hubo un error", error);
        });
      });
    } else {
      console.log(this.formDatos);
      this.formDatos.markAllAsTouched();
    }
}




  cargarArchivos = async (archivos: any[]): Promise<Documento[]> => {
    return await Promise.all(archivos.map(async (usuario): Promise<Documento> => {
      return {
        nombre: usuario.name,
        tamanio: usuario.size,
        extension: usuario.type,
        datos: await this.cargarArchivo(usuario)
      }
    }));
  }

  cargarArchivo = async (usuario: any): Promise<string> => {
    let base64 = await new Promise((resolve) => {
      let fileReader = new FileReader();
      fileReader.onload = (e) => resolve(fileReader.result);
      fileReader.readAsDataURL(usuario);
    });
    return base64 as string;
  }


  seleccionarFotoPerfil(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
  }


  cancelarSeleccionDeFotoPerfil() {
    this.uploadedFiles.length = 0;
    console.log("Se cancelo la seleccion de archivos");
  }

  borrarFotoPerfil(event) {
    this.uploadedFiles.forEach((modelo, indice) => {
      if (modelo == event.file) {
        this.uploadedFiles.splice(indice,1);
      }
    });
    console.log("Se elimino un modelo");
  }



  fotoDePerfilCargada(): boolean {
    return this.imagenPerfil && this.imagenPerfil !== "";
  }

  obtenerRangoDeEdad(): string {
    var fechaActual = new Date().getFullYear();
    var fechaLimiteMaxima = fechaActual - 18;
    var fechaLimiteMinima = fechaActual - 70;
    return fechaLimiteMinima + ":" + fechaLimiteMaxima;
  }
}
