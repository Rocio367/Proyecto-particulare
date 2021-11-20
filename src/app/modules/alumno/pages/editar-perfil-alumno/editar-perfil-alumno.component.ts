import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AlumnnoService } from "src/app/core/services/alumno/alumnno.service";
import { Alumno } from "src/app/shared/models/alumno";
import { Usuario } from './../../../../shared/models/usuario';


@Component({
  selector: 'app-editar-perfil-alumno',
  templateUrl: './editar-perfil-alumno.component.html',
  styleUrls: ['./editar-perfil-alumno.component.scss']
})
export class EditarPerfilAlumnoComponent implements OnInit {

  nivelAcademico=[{name:'Primaria',value:'1'},{name:'Secundaria',value:'2'},{name:'Universitario',value:'3'},{name:'Terciario',value:'4'}]
  
  alumno: Alumno;
  id: number = Number(localStorage.getItem("idUser"));

  formDatos = this.form.group({
    fotoPerfil: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    telefono: ['',Validators.pattern(/^(0|\-?[1-9][0-9]*)$/)],
    email: ['', [Validators.email, Validators.required]],
    contrasenia: ['', Validators.required],
    repetirContrasenia: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    intereses: ['', Validators.required],
    nivelAcademico: ['', Validators.required],
  });

  tiposDeArchivosPermitidos = ".png, .jpg, .jpeg";
  imagenPerfil = "";
  imagenDefault = "../../../../../assets/img/default-user.png";

  constructor(private _snackBar :MatSnackBar, private form: FormBuilder, 
    private router: Router, private alumnoService: AlumnnoService ) { }

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

    this.alumnoService.buscarPorId(this.id).subscribe( 
      (alumno) => {
        this.alumno = alumno;
        this.formDatos.controls['nombre'].setValue(this.alumno.usuario.nombre);
        this.formDatos.controls['apellido'].setValue(this.alumno.usuario.apellido);
        this.formDatos.controls['telefono'].setValue(this.alumno.usuario.telefono);
        this.formDatos.controls['email'].setValue(this.alumno.usuario.email);
        this.formDatos.controls['contrasenia'].setValue(this.alumno.usuario.contrasenia);
        this.formDatos.controls['repetirContrasenia'].setValue(this.alumno.usuario.contrasenia);
        this.formDatos.controls['intereses'].setValue(this.alumno.materiasInteres);
    },
    (error) => {
      console.error(error);
    }
    );


  }

  fotoDePerfilCargada() : boolean {
    return this.imagenPerfil && this.imagenPerfil !== '';
  }

  editarAlumno(){
    if(this.formDatos.valid) {

      let alumno: Alumno;
      let user : Usuario;

      user = {
        nombre: this.formDatos.controls["nombre"].value,
        apellido: this.formDatos.controls["apellido"].value,
        telefono: this.formDatos.controls["telefono"].value,
        email: this.formDatos.controls["email"].value,
        contrasenia: this.formDatos.controls["contrasenia"].value,
        fechaNacimiento: this.formDatos.controls["fechaNacimiento"].value,
        fotoPerfil: this.imagenPerfil,
        documento:  38663642,
        id:this.id,
        rol:null,
      }

      alumno = {
        materiasInteres: this.formDatos.controls["intereses"].value,
        nivelAcademico:this.formDatos.controls["nivelAcademico"].value,
        usuario: user
      }


      this.alumnoService.editarAlumno(alumno)
      .subscribe(
        () => {
          this._snackBar.open('El usuario fue editado correctamente', "", {
            duration: 3000,
            horizontalPosition: "end",
            verticalPosition: "top",
            panelClass: ['green-snackbar']
          });
          this.router.navigate(['/perfil-alumno']);
        },
        (error) => {
          this.formDatos.markAllAsTouched();
          this._snackBar.open('Error al editar el usuario, ingrese los campos correctamente.', "", {
            duration: 3000,
            horizontalPosition: "end",
            verticalPosition: "top",
          });
          console.error(alumno, error);
        }
      )
    }
    else {
      this.formDatos.markAllAsTouched();
      this._snackBar.open('Error en el formulario, ingrese los campos correctamente.', "", {
        duration: 1500,
        horizontalPosition: "end",
        verticalPosition: "top",
      });
    console.log('Error en la validacion del formulario') 
    this.formDatos.markAllAsTouched();
    
    }

  }

  obtenerRangoDeEdad(): string {
    var fechaActual = new Date().getFullYear();
    var fechaLimiteMaxima = fechaActual - 18;
    var fechaLimiteMinima = fechaActual - 80;
    return fechaLimiteMinima + ":" + fechaLimiteMaxima;
  }


}

