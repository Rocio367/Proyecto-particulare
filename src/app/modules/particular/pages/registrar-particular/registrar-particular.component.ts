import { Particular } from './../../../../shared/models/particular';
import { Usuario } from './../../../../shared/models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ParticularService } from 'src/app/core/services/particular/particular.service';
import { Documento } from 'src/app/shared/models/documento';

@Component({
  selector: 'app-registrar-particular',
  templateUrl: './registrar-particular.component.html',
  styleUrls: ['./registrar-particular.component.scss']
})
export class RegistrarParticularComponent implements OnInit {

  uploadedFiles: any[] = [];

  formDatos = this.form.group({
    fotoPerfil: [''],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    telefono: ['', Validators.pattern("^[0-9]*$")],
    email: ['', [Validators.email, Validators.required]],
    contrasenia: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
    fechaNacimiento: ['', Validators.required],
    formacionAcademica: [''],
    documento: ['', Validators.pattern("^[0-9]*$")]
  });

  tiposDeArchivosPermitidos = ".png, .jpg, .jpeg";
  imagenPerfil = "";
  imagenDefault = "../../../../../assets/img/default-user.png";

  constructor(private _snackBar: MatSnackBar, private form: FormBuilder, private router: Router,
    private particularService: ParticularService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.formDatos.controls['fotoPerfil'].valueChanges.subscribe(
      archivo => {
        const reader = new FileReader();
        reader.readAsDataURL(archivo)
        reader.onload = () => {
          this.imagenPerfil = reader.result as string;
        }
      }
    );
  }

  registrarParticular() {
    if (this.formDatos.valid) {
      let particular: Particular;
      let user: Usuario;
      if (this.uploadedFiles.length > 0) {
        this.cargarArchivos(this.uploadedFiles)
          .then((archivos) => {
            user = {
              nombre: this.formDatos.controls["nombre"].value,
              apellido: this.formDatos.controls["apellido"].value,
              telefono: this.formDatos.controls["telefono"].value,
              email: this.formDatos.controls["email"].value,
              contrasenia: this.formDatos.controls["contrasenia"].value,
              fechaNacimiento: this.formDatos.controls["fechaNacimiento"].value,
              fotoPerfil: archivos,
              documento: this.formDatos.controls["documento"].value,
              id: null,
              rol: null
            }

            particular = {
              id: null,
              video: null,
              localidad: null,
              experiencia: this.formDatos.controls["formacionAcademica"].value,
              usuario: user,
            }


            this.particularService.crearProfesor(particular)
              .subscribe(
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
        this._snackBar.open("Debe agregar una foto de perfil", "", {
          duration: 1500,
          horizontalPosition: "end",
          verticalPosition: "top",
          panelClass: ["red-snackbar"],

        });
      }
    } else {
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
    for (let file of event.files) {
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
        this.uploadedFiles.splice(indice, 1);
      }
    });
    console.log("Se elimino la foto de perfil");
  }



  fotoDePerfilCargada(): boolean {
    return this.imagenPerfil && this.imagenPerfil !== '';
  }

  obtenerRangoDeEdad(): string {
    var fechaActual = new Date().getFullYear();
    var fechaLimiteMaxima = fechaActual - 18;
    var fechaLimiteMinima = fechaActual - 70;
    return fechaLimiteMinima + ":" + fechaLimiteMaxima;
  }

}
