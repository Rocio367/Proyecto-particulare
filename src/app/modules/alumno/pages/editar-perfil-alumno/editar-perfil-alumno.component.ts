import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil-alumno',
  templateUrl: './editar-perfil-alumno.component.html',
  styleUrls: ['./editar-perfil-alumno.component.scss']
})
export class EditarPerfilAlumnoComponent implements OnInit {

  formDatos = this.form.group({
    fotoPerfil: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    telefono: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    contrasenia: ['', Validators.required],
    repetirContrasenia: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    intereses: ['', Validators.required],
    institucuion: ['', Validators.required],
    nivelAcademico: ['', Validators.required],
  });

  tiposDeArchivosPermitidos = ".png, .jpg, .jpeg";
  imagenPerfil = "";

  constructor(private form: FormBuilder, private router: Router ) { }

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

  fotoDePerfilCargada() : boolean {
    return this.imagenPerfil && this.imagenPerfil !== '';
  }

  editarAlumno(){
    if(this.formDatos.valid) {
      this.router.navigate(['/perfil-alumno']);
      return true;
    } else {
      this.formDatos.markAllAsTouched();
    }
  }
}
