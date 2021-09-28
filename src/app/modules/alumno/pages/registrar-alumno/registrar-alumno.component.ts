import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-alumno',
  templateUrl: './registrar-alumno.component.html',
  styleUrls: ['./registrar-alumno.component.scss']
})
export class RegistrarAlumnoComponent {
  formDatos = this.form.group({
    fotoPerfil: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    contrasenia: ['', Validators.required],
    repetirContrasenia: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    intereses: ['', Validators.required], 
    institucuion: ['', Validators.required],
    nivelAcademico: ['', Validators.required],
  });

  tiposDeArchivosPermitidos = ".png, .jpg, .jpeg"; 

  constructor(private form: FormBuilder, private router: Router ) {}

  registrarAlumno(){
    if(this.formDatos.valid) {
      this.router.navigate(['/perfil-alumno']);
      return true;
    } else {
      this.formDatos.markAllAsTouched();
    }    
  }
}
