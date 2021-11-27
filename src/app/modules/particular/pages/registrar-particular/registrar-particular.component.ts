import { Particular } from './../../../../shared/models/particular';
import { Usuario } from './../../../../shared/models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ParticularService } from 'src/app/core/services/particular/particular.service';


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
    telefono: ['', Validators.pattern("^[0-9]*$")],
    email: ['', [Validators.email, Validators.required]],
    contrasenia: ['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],    
    fechaNacimiento: ['', Validators.required],
    formacionAcademica: [''],
    documento: ['',Validators.pattern("^[0-9]*$")]
  });

  tiposDeArchivosPermitidos = ".png, .jpg, .jpeg";
  imagenPerfil = "";
  imagenDefault = "../../../../../assets/img/default-user.png";

  constructor(private _snackBar:MatSnackBar,private form: FormBuilder, private router: Router,
    private particularService: ParticularService,public snackBar: MatSnackBar ) { }

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
        documento: this.formDatos.controls["documento"].value,
        id:null,
        rol:null
      }

      particular = {
        id:null,
        video:null,
        localidad:null,
        experiencia: this.formDatos.controls["formacionAcademica"].value,
        usuario: user,
      }

      this.particularService.crearProfesor(particular)
      .subscribe(
        () => {
          this.snackBar.open('El usuario fue registrado correctamente', "", {
            duration: 1500,
            horizontalPosition: "end",
            verticalPosition: "top",
            panelClass: ['green-snackbar']
          });
          this.router.navigate(['/home'])

        },
        (error) => {
          console.error(particular, error);
          this.snackBar.open('Error al registrar usuario', "", {
            duration: 1500,
            horizontalPosition: "end",
            verticalPosition: "top",
          });
        });
        } else {
        console.log('Error') 
        this.formDatos.markAllAsTouched();
        this.snackBar.open('Error al registrar usuario, ingrese los campos correctamente.', "", {
          duration: 1500,
          horizontalPosition: "end",
          verticalPosition: "top",
        });
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
