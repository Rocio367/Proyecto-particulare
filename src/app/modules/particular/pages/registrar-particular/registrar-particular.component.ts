import { Particular } from './../../../../shared/models/particular';
import { Usuario } from './../../../../shared/models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ParticularService } from 'src/app/core/services/particular/particular.service';
import { Documento } from 'src/app/shared/models/documento';
import { FileUpload } from 'primeng/fileupload';


@Component({
  selector: 'app-registrar-particular',
  templateUrl: './registrar-particular.component.html',
  styleUrls: ['./registrar-particular.component.scss']
})
export class RegistrarParticularComponent implements OnInit {
  uploadedFiles: any[] = [];

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
      let particular: Particular;
      let user : Usuario;
      let foto : Documento;

      foto = {
        nombre: "string",
        extension: ".png",
        tamanio: 0,
        datos: "string"
      }

      user = {
        nombre: this.formDatos.controls["nombre"].value,
        apellido: this.formDatos.controls["apellido"].value,
        telefono: this.formDatos.controls["telefono"].value,
        email: this.formDatos.controls["email"].value,
        contrasenia: this.formDatos.controls["contrasenia"].value,
        fechaNacimiento: this.formDatos.controls["fechaNacimiento"].value,
        foto:foto,
        documento: 4087594,
      }
  

      particular = {
        experiencia: this.formDatos.controls["formacionAcademica"].value,
        usuario: user
      }

      this.particularService.crearProfesor(particular)
      .subscribe(
        () => {
          this.snackBar.open('El usuario fue cargadado correctamente', "", {
            duration: 1500,
            horizontalPosition: "end",
            verticalPosition: "top",
            panelClass: ['green-snackbar']
          });
          this.formDatos.reset();
        },
        (error) => {
          //!= 200
          console.error(particular, error);
        });
        } else {
        console.log('Error') 
        this.formDatos.markAllAsTouched();
        }
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

  fotoDePerfilCargada() : boolean {
    return this.imagenPerfil && this.imagenPerfil !== '';
  }
  
  obtenerRangoDeEdad() :string {
    var fechaActual = new Date().getFullYear();
    var fechaLimiteMaxima = fechaActual - 18;
    var fechaLimiteMinima = fechaActual - 100;
    return fechaLimiteMinima + ":" + fechaLimiteMaxima;
  }

  seleccionaFoto(event) {

    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    console.log("Se selecciono una foto");
  }
  
}
