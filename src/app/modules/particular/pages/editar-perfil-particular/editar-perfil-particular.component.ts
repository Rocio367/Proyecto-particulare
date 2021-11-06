import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Particular } from './../../../../shared/models/particular';
import { Usuario } from './../../../../shared/models/usuario';
import { ParticularService } from 'src/app/core/services/particular/particular.service';

@Component({
  selector: 'app-editar-perfil-particular',
  templateUrl: './editar-perfil-particular.component.html',
  styleUrls: ['./editar-perfil-particular.component.scss']
})
export class EditarPerfilParticularComponent implements OnInit {

  formDatos = this.form.group({
    fotoPerfil: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    telefono: [''],
    email: ['', [Validators.email, Validators.required]],
    contrasenia: ['', Validators.required],
    repetirContrasenia: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    formacionAcademica: ['']

  });

  tiposDeArchivosPermitidos = ".png, .jpg, .jpeg";
  imagenPerfil = "";
  imagenDefault = "../../../../../assets/img/default-user.png";

  constructor(private _snackBar:MatSnackBar, private form: FormBuilder, private router: Router,
    private particularService: ParticularService,public snackBar: MatSnackBar) { }

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

    // Mock para el video
    this.formDatos.controls['descripcion'].setValue(`Me llamo Mario, soy ingeniero en informática, programador freelance. 
    La programación es parte de mi vida casi en todo momento , siempre estoy realizando tanto sea trabajos, clases o estudiando programación por interés propio.
    Me encanta enseñar, se me da fácil explicarme, ejemplificar y a la vez motivar a mi alumno para que siempre vaya por más.
    Te aseguro que si haces una clase conmigo podrás divertirte y aprender, que es la manera que siempre se aprende más rápido, disfrutando lo que se hace.`);
  
    this.formDatos.controls['formacionAcademica'].setValue('Ingeniero en informática')
  }

  fotoDePerfilCargada() : boolean {
    return this.imagenPerfil && this.imagenPerfil !== '';
  }

  editarParticular(){
    if(this.formDatos.valid) {
      let particular: Particular;
      let user : Usuario;

      user = {
        nombre: this.formDatos.controls["nombre"].value,
        apellido: this.formDatos.controls["apellido"].value,
        telefono: this.formDatos.controls["telefono"].value,
        email: this.formDatos.controls["email"].value,
        contrasenia: this.formDatos.controls["contrasenia"].value,
        fechaNacimiento: this.formDatos.controls["fechaNacimiento"].value,
        fotoPerfil: this.imagenPerfil,
        documento: 4087594,
      }

      particular = {
        id:1, /* HARDCODEADO HAY QUE CAMBIARLO */
        experiencia: this.formDatos.controls["formacionAcademica"].value,
        usuario: user
      }

      this.particularService.editarProfesor(particular)
      .subscribe(
        () => {
          this.snackBar.open('El usuario fue editado correctamente', "", {
            duration: 1500,
            horizontalPosition: "end",
            verticalPosition: "top",
            panelClass: ['green-snackbar']
          });
          this.formDatos.reset();
        },
        (error) => {
          //!= 200
          console.error(particular, error);
        });
        } else {
        console.log('Error') 
        this.formDatos.markAllAsTouched();
        }
  }

  obtenerRangoDeEdad() :string {
    var fechaActual = new Date().getFullYear();
    var fechaLimiteMaxima = fechaActual - 18;
    var fechaLimiteMinima = fechaActual - 100;
    return fechaLimiteMinima + ":" + fechaLimiteMaxima;
  }
}
