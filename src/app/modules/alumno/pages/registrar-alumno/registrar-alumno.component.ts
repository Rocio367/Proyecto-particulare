import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registrar-alumno',
  templateUrl: './registrar-alumno.component.html',
  styleUrls: ['./registrar-alumno.component.scss']
})
export class RegistrarAlumnoComponent {
  formDatos: FormGroup;
  fotoPerfilFormControl: FormControl;
  tiposDeArchivosPermitidos = ".png, .jpg, .jpeg";
  foto: any;

  constructor(private form: FormBuilder) {

    this.fotoPerfilFormControl = new FormControl([this.foto, Validators.required])

    this.formDatos = this.form.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      contrasenia: ['', Validators.required],
      repetirContrasenia: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      intereses: ['', Validators.required], 
      institucuion: ['', Validators.required],
      nivelAcademico: ['', Validators.required],
      fotoPerfil: this.fotoPerfilFormControl
    });
  }

}
