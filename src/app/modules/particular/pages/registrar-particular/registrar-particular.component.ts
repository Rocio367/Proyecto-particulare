import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  imagenDefault = "../../../../../assets/img/default-user.png";

  constructor(private _snackBar:MatSnackBar,private form: FormBuilder, private router: Router) { }

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

    //Datos mockeados para video
    this.formDatos.controls['nombre'].setValue('Mario');
    this.formDatos.controls['apellido'].setValue('Perez');
    this.formDatos.controls['telefono'].setValue('1155778956');
    this.formDatos.controls['email'].setValue('mario@gmail.com');
    this.formDatos.controls['contrasenia'].setValue('12345');
    this.formDatos.controls['repetirContrasenia'].setValue('12345');
    this.formDatos.controls['fechaNacimiento'].setValue(new Date(1989, 1, 20));
    this.formDatos.controls['formacionAcademica'].setValue('Ingeniero en informática');
  }
  registrarParticular(){
    if(this.formDatos.valid) {
      this._snackBar.open('Perfil creado correctamente', 'x');
      this.router.navigate(['/perfil-particular',1]);
      return true;
    } else {
      this.formDatos.markAllAsTouched();
    }
  }

  fotoDePerfilCargada() : boolean {
    return this.imagenPerfil && this.imagenPerfil !== '';
  }
  
  obtenerRangoDeEdad() :string {
    var fechaActual = new Date().getFullYear();
    var fechaLimiteMaxima = fechaActual - 18;
    var fechaLimiteMinima = fechaActual - 100;
    return fechaLimiteMinima + ":" + fechaLimiteMaxima;
  }
  
}
