import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AlumnnoService } from "src/app/core/services/alumno/alumnno.service";
import { Alumno } from "src/app/shared/models/alumno";
import { Usuario } from './../../../../shared/models/usuario';
import { Documento } from 'src/app/shared/models/documento';


@Component({
  selector: 'app-editar-perfil-alumno',
  templateUrl: './editar-perfil-alumno.component.html',
  styleUrls: ['./editar-perfil-alumno.component.scss']
})
export class EditarPerfilAlumnoComponent implements OnInit {

  nivelAcademico = [{ name: 'Primaria', value: '1' }, { name: 'Secundaria', value: '2' }, { name: 'Universitario', value: '3' }, { name: 'Terciario', value: '4' }]

  alumno: Alumno;
  id: number = Number(localStorage.getItem("idUser"));
  doc: Documento;
  uploadedFiles: any[] = [];
  fotoPerfil:string;
  formDatos = this.form.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    telefono: ['', Validators.pattern("^[0-9]*$")],
    email: ['', [Validators.email, Validators.required]],
    contrasenia: ['', Validators.required],
    repetirContrasenia: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    intereses: ['', Validators.required],
    nivelAcademico: ['', Validators.required],
    documento: ['', [Validators.pattern("^[0-9]*$"), Validators.required]],

  });

  tiposDeArchivosPermitidos = ".png, .jpg, .jpeg";
  imagenPerfil = "";
  imagenDefault = "../../../../../assets/img/default-user.png";

  constructor(private _snackBar: MatSnackBar, private form: FormBuilder,
    private router: Router, private alumnoService: AlumnnoService) {

    }
  ngOnInit(): void {

    this.alumnoService.buscarPorId(this.id).subscribe(
      (alumno) => {
        this.alumno = alumno;
        console.log(alumno)
        this.formDatos.controls['nombre'].setValue(this.alumno.usuario.nombre);
        this.formDatos.controls['apellido'].setValue(this.alumno.usuario.apellido);
        this.formDatos.controls['telefono'].setValue(this.alumno.usuario.telefono);
        this.formDatos.controls['email'].setValue(this.alumno.usuario.email);
        this.formDatos.controls['contrasenia'].setValue(this.alumno.usuario.contrasenia);
        this.formDatos.controls['repetirContrasenia'].setValue(this.alumno.usuario.contrasenia);
        this.formDatos.controls['intereses'].setValue(this.alumno.materiasInteres);
        this.formDatos.controls['documento'].setValue(alumno.usuario.documento);
        this.formDatos.controls['fechaNacimiento'].setValue(new Date(alumno.usuario.fechaNacimiento));
        this.alumnoService.obtenerFotoPerfilPorUsuario(Number(this.id)).subscribe(
          (archivos) => {
            this.doc = archivos[0];
            this.fotoPerfil=this.obtenerImagenEnBase64(this.doc);
          
          },
          (error) => console.error(error)
        );

      },
      (error) => {
        console.error(error);
      }
      
    );
     
  }
 
  fotoDePerfilCargada(): boolean {
    return this.imagenPerfil && this.imagenPerfil !== '';
  }
  obtenerImagenEnBase64(documento: Documento): string {
    return `data:${documento.extension};base64,${documento.datos}`;
  }
  editarAlumno() {
    console.log(this.formDatos);
    if (this.formDatos.valid) {

      let alumno: Alumno;
      let user: Usuario;

      this.cargarArchivos(this.uploadedFiles)
        .then((archivos) => {
          user = {
            nombre: this.formDatos.controls["nombre"].value,
            apellido: this.formDatos.controls["apellido"].value,
            telefono: this.formDatos.controls["telefono"].value,
            email: this.formDatos.controls["email"].value,
            contrasenia: this.formDatos.controls["contrasenia"].value,
            fechaNacimiento: this.formDatos.controls["fechaNacimiento"].value,
            fotoPerfil: archivos,
            documento: this.formDatos.controls["documento"].value,
            id: this.id,
            rol: null,
          }

          alumno = {
            materiasInteres: this.formDatos.controls["intereses"].value,
            nivelAcademico: this.formDatos.controls["nivelAcademico"].value,
            usuario: user,
            idUser: this.id
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
        });
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
    var fechaLimiteMinima = fechaActual - 70;
    return fechaLimiteMinima + ":" + fechaLimiteMaxima;
  }


  cargarArchivos = async (archivos: any[]): Promise<Documento[]> => {
    return await Promise.all(archivos.map(async (usuario): Promise<Documento> => {
      return {
        nombre: usuario.name,
        tamanio: usuario.size,
        extension: usuario.type,
        datos: await this.cargarArchivo(usuario)
      }
    }));
  }

  cargarArchivo = async (usuario: any): Promise<string> => {
    let base64 = await new Promise((resolve) => {
      let fileReader = new FileReader();
      fileReader.onload = (e) => resolve(fileReader.result);
      fileReader.readAsDataURL(usuario);
    });
    return base64 as string;
  }


  seleccionarFotoPerfil(event) {

    for (let file of event.files) {
      this.fotoPerfil=null;
      this.uploadedFiles.push(file);
      console.log(this.uploadedFiles)
    }
  }


  cancelarSeleccionDeFotoPerfil() {
    this.uploadedFiles.length = 0;
    console.log("Se cancelo la seleccion de archivos");
  }

  borrarFotoPerfil(event) {
    this.uploadedFiles.forEach((modelo, indice) => {
      if (modelo == event.file) {
        this.uploadedFiles.splice(indice, 1);
      }
    });
    console.log("Se elimino un modelo");
  }



}

