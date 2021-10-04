import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-particular',
  templateUrl: './registrar-particular.component.html',
  styleUrls: ['./registrar-particular.component.scss']
})
export class RegistrarParticularComponent implements OnInit {

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
  }
  registrarParticular(){
    if(this.formDatos.valid) {
      this.router.navigate(['/perfil-particular',1]);
      return true;
    } else {
      this.formDatos.markAllAsTouched();
    }
  }

  fotoDePerfilCargada() : boolean {
    return this.imagenPerfil && this.imagenPerfil !== '';
  }
}
