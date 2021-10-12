import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
    telefono: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    contrasenia: ['', Validators.required],
    repetirContrasenia: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    experiencia: ['', Validators.required],
    institucuion: ['', Validators.required],
    formacionAcademica: ['', Validators.required],
    localidad: ['', Validators.required],
    descripcion: ['', Validators.required],

  });

  tiposDeArchivosPermitidos = ".png, .jpg, .jpeg";
  imagenPerfil = "";
  imagenDefault = "../../../../../assets/img/IMG-20211012-WA0030.jpg";

  constructor(private form: FormBuilder, private router: Router) { }

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
    this.formDatos.controls['descripcion'].setValue(`Me llamo Sergio, soy ingeniero en informática, programador freelance. 
    La programación es parte de mi vida casi en todo momento , siempre estoy realizando tanto sea trabajos, clases o estudiando programación por interés propio.
    Me encanta enseñar, se me da fácil explicarme, ejemplificar y a la vez motivar a mi alumno para que siempre vaya por más.
    Te aseguro que si haces una clase conmigo podrás divertirte y aprender, que es la manera que siempre se aprende mas rápido, disfrutando lo que se hace.`);
  
    this.formDatos.controls['formacionAcademica'].setValue('Ingeniero en informática')
  }

  fotoDePerfilCargada() : boolean {
    return this.imagenPerfil && this.imagenPerfil !== '';
  }

  editarParticular(){
    if(this.formDatos.valid) {
      this.router.navigate(['/perfil-alumno']);
      return true;
    } else {
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
