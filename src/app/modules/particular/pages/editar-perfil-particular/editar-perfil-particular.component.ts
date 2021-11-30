import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Particular } from './../../../../shared/models/particular';
import { Usuario } from './../../../../shared/models/usuario';
import { ParticularService } from 'src/app/core/services/particular/particular.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Documento } from 'src/app/shared/models/documento';


@Component({
  selector: 'app-editar-perfil-particular',
  templateUrl: './editar-perfil-particular.component.html',
  styleUrls: ['./editar-perfil-particular.component.scss']
})



export class EditarPerfilParticularComponent implements OnInit {
  valor: number;
  particular: Particular;
  uploadedFiles: any[] = [];
  id: number = Number(localStorage.getItem('idUser'));
  formDatos = this.form.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    telefono: ['', Validators.pattern("^[0-9]*$")],
    email: ['', [Validators.email, Validators.required]],
    contrasenia: ['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],    
    fechaNacimiento: ['', Validators.required],
    descripcion: [''],
    documento: ['',[Validators.pattern("^[0-9]*$"),Validators.required]],
    localidad: [""],
  });

  


  tiposDeArchivosPermitidos = ".png, .jpg, .jpeg";
  imagenPerfil = "";
  imagenDefault = "../../../../../assets/img/default-user.png";

  constructor(private _snackBar:MatSnackBar, private form: FormBuilder, private router: Router,
    private particularService: ParticularService,public snackBar: MatSnackBar,private aRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.particularService.buscarPorIdProfesor(this.id).subscribe( 
      (particular) => {
        this.particular = particular;
        this.formDatos.controls['nombre'].setValue(this.particular.usuario.nombre);
        this.formDatos.controls['apellido'].setValue(this.particular.usuario.apellido);
        this.formDatos.controls['telefono'].setValue(this.particular.usuario.telefono);
        this.formDatos.controls['email'].setValue(this.particular.usuario.email);
        this.formDatos.controls['contrasenia'].setValue(this.particular.usuario.contrasenia);
        this.formDatos.controls['descripcion'].setValue(this.particular.experiencia);
        this.formDatos.controls['documento'].setValue(this.particular.usuario.documento);
        this.formDatos.controls['localidad'].setValue(this.particular.localidad);
        this.formDatos.controls['fechaNacimiento'].setValue(new Date(particular.usuario.fechaNacimiento));
    },
    (error) => {
      console.error(error);
    }
    );
  
  }
  
  editarParticular(){
    if(this.formDatos.valid) {
      let particular: Particular;
      let user : Usuario;

      this.cargarArchivos(this.uploadedFiles)
      .then((archivos) => {
      user = {
        nombre: this.formDatos.controls["nombre"].value,
        apellido: this.formDatos.controls["apellido"].value,
        telefono: this.formDatos.controls["telefono"].value,
        email: this.formDatos.controls["email"].value,
        contrasenia: this.formDatos.controls["contrasenia"].value,
        fechaNacimiento: this.formDatos.controls["fechaNacimiento"].value,
        documento:this.formDatos.controls["documento"].value,
        fotoPerfil: archivos,
        id:this.id,
        rol:null,
      }


      particular = {
        id:this.id,
        localidad: this.formDatos.controls["localidad"].value,
        video:null,
        experiencia: this.formDatos.controls["descripcion"].value,
        usuario: user,
        idUsuario:this.id
      }

      this.particularService.editarProfesor(particular)
      .subscribe(
        () => {
          this.router.navigate(['/mi-perfil-particular']);
          this.snackBar.open('El usuario fue editado correctamente', "", {
            duration: 1500,
            horizontalPosition: "end",
            verticalPosition: "top",
            panelClass: ['green-snackbar']
          });
        },
        (error) => {
          //!= 200
          this.formDatos.markAllAsTouched();
          this.snackBar.open('Error al registrar usuario, ingrese los campos correctamente.', "", {
            duration: 1500,
            horizontalPosition: "end",
            verticalPosition: "top",
          });
          console.error(particular, error);
        });
      });
        } else {
          this.formDatos.markAllAsTouched();
          this.snackBar.open('Error al registrar usuario, ingrese los campos correctamente.', "", {
            duration: 1500,
            horizontalPosition: "end",
            verticalPosition: "top",
          });
        console.log('Error en la validacion de datos') 
        this.formDatos.markAllAsTouched();
        
        }
  }

  

 
  obtenerRangoDeEdad() :string {
    var fechaActual = new Date().getFullYear();
    var fechaLimiteMaxima = fechaActual - 18;
    var fechaLimiteMinima = fechaActual - 70;
    return fechaLimiteMinima + ":" + fechaLimiteMaxima;
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
    console.log("Se cancelo la seleccion de foto de perfil");
  }

  borrarFotoPerfil(event) {
    this.uploadedFiles.forEach((modelo, indice) => {
      if (modelo == event.file) {
        this.uploadedFiles.splice(indice,1);
      }
    });
    console.log("Se elimino la foto de perfil");
  }

  fotoDePerfilCargada() : boolean {
    return this.imagenPerfil && this.imagenPerfil !== '';
  }


}
