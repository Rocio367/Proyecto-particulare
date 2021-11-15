import { Documento } from './../../../../shared/models/documento';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Particular } from './../../../../shared/models/particular';
import { Usuario } from './../../../../shared/models/usuario';
import { ParticularService } from 'src/app/core/services/particular/particular.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil-particular',
  templateUrl: './editar-perfil-particular.component.html',
  styleUrls: ['./editar-perfil-particular.component.scss']
})



export class EditarPerfilParticularComponent implements OnInit {
  valor: number;
  particular: Particular;
  id: number = Number(localStorage.getItem('idUser'));
  formDatos = this.form.group({
    fotoPerfil: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    telefono: ['',Validators.pattern(/^(0|\-?[1-9][0-9]*)$/)],
    email: ['', [Validators.email, Validators.required]],
    contrasenia: ['', Validators.required],
    repetirContrasenia: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    descripcion: [''],
    documento: ["", Validators.required],
    localidad: [""],

  });

  


  tiposDeArchivosPermitidos = ".png, .jpg, .jpeg";
  imagenPerfil = "";
  imagenDefault = "../../../../../assets/img/default-user.png";

  constructor(private _snackBar:MatSnackBar, private form: FormBuilder, private router: Router,
    private particularService: ParticularService,public snackBar: MatSnackBar,private aRouter: ActivatedRoute) { }

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
    this.particularService.buscarPorIdProfesor(this.id).subscribe( 
      (particular) => {
        this.particular = particular;
        this.formDatos.controls['nombre'].setValue(this.particular.usuario.nombre);
        this.formDatos.controls['apellido'].setValue(this.particular.usuario.apellido);
        this.formDatos.controls['telefono'].setValue(this.particular.usuario.telefono);
        this.formDatos.controls['email'].setValue(this.particular.usuario.email);
        this.formDatos.controls['contrasenia'].setValue(this.particular.usuario.contrasenia);
        this.formDatos.controls['repetirContrasenia'].setValue(this.particular.usuario.contrasenia);
        this.formDatos.controls['descripcion'].setValue(this.particular.experiencia);
        this.formDatos.controls['documento'].setValue(this.particular.usuario.documento);
        this.formDatos.controls['localidad'].setValue(this.particular.localidad);

    },
    (error) => {
      console.error(error);
    }
    );
  
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
        documento:  this.formDatos.controls["documento"].value,
        id:this.id,
        rol:null,
      }

      particular = {
        id:this.id,
        localidad: this.formDatos.controls["localidad"].value,
        video:null,
        experiencia: this.formDatos.controls["descripcion"].value,
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
        } else {
          this.formDatos.markAllAsTouched();
          this.snackBar.open('Error al registrar usuario, ingrese los campos correctamente.', "", {
            duration: 1500,
            horizontalPosition: "end",
            verticalPosition: "top",
          });
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
