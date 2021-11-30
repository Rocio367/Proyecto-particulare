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

  nivelAcademico = [{ name: 'Primaria', value: '1' }, { name: 'Secundaria', value: '2' }, { name: 'Universitario', value: '3' }, { name: 'Terciario', value: '4' }]

  uploadedFiles: any[] = [];

  formDatos = this.form.group({
    nombre: ["", Validators.required],
    apellido: ["", Validators.required],
    documento: ['', Validators.pattern("^[0-9]*$")],
    email: ["", [Validators.email, Validators.required]],
    contrasenia: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
    telefono: ['', Validators.pattern("^[0-9]*$")],
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
  ) { }

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
      let alumno: Alumno;
      if (this.uploadedFiles.length > 0) {
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
              id: null,
              rol: null
            }

            alumno = {
              materiasInteres: this.formDatos.controls["materiasInteres"].value,
              nivelAcademico: this.formDatos.controls["nivelAcademico"].value,
              usuario: usuario
            };
            console.log(usuario)
            console.log("la foto es" + alumno.usuario.fotoPerfil);

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
                this._snackBar.open(localStorage.getItem('errorMensaje'), "", {
                  duration: 1500,
                  horizontalPosition: "end",
                  verticalPosition: "top",
                  panelClass: ["red-snackbar"],

                });
              });
          });
      } else {
        console.error("validacion");
        this.formDatos.markAllAsTouched();
      }
    } else {
      this._snackBar.open("Debe agregar una foto de perfil", "", {
        duration: 1500,
        horizontalPosition: "end",
        verticalPosition: "top",
        panelClass: ["red-snackbar"],

      })


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

    for (let file of event.files) {
      console.log(file)
      this.imagenPerfil = file;
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
        this.uploadedFiles.splice(indice, 1);
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
