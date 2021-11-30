import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FileUpload } from 'primeng/fileupload';
import { ModelosService } from 'src/app/core/services/modelos/modelos.service';
import { Documento } from 'src/app/shared/models/documento';
import { Materia } from 'src/app/shared/models/materia';
import { Modelo } from 'src/app/shared/models/modelo';
import { Nivel } from 'src/app/shared/models/nivel';
import { Institucion } from 'src/app/shared/models/institucion';
import { InstitucionService } from 'src/app/core/services/institucion/institucion.service';
import { Carrera } from 'src/app/shared/models/carrera';
import { CarreraService } from 'src/app/core/services/carrera/carrera.service';

@Component({
  selector: 'app-modal-subir-archivo',
  templateUrl: './modal-subir-archivo.component.html',
  styleUrls: ['./modal-subir-archivo.component.scss']
})
export class ModalSubirArchivoComponent implements OnInit {
 
  uploadedFiles: any[] = [];
  _institucion: Institucion[] = [];
  _carrera: Carrera[] = [];
  _materias: Materia[] = [];
  _niveles: Nivel[] = [];
  formDatos: FormGroup;
  @ViewChild(FileUpload)
  private fileUploadComponent: FileUpload;
  idUser:any;
  constructor(private form: FormBuilder,public snackBar: MatSnackBar,private router:Router, private modelosService: ModelosService, private institucionService: InstitucionService, private carreraService: CarreraService) {
    this.idUser=localStorage.getItem('idUser')
  }

  ngOnInit(): void {
    this.formDatos = this.form.group({
      nombre: ['', [Validators.required]],
      institucion: ['', [Validators.required]],
      carrera: ['',Validators.required],
      materia: ['',Validators.required],
      nivel: ['',Validators.required],
      publico: [''],
    });

    this.institucionService.obtenerInstitucion()
      .subscribe(
        (institucion) => {
          this._institucion = institucion;
        },
        (error) => {
          console.log("Error obteniendo las instituciones", error);
        });

    this.carreraService.obtenerCarrera()
      .subscribe(
        (carrera) => {
          this._carrera = carrera;
        },
        (error) => {
          console.log("Error obteniendo las carreras", error);
        });    


    this.modelosService.obtenerMaterias()
      .subscribe(
        (materias) => {
          this._materias = materias;
        }, 
        (error) => {
          console.log("Error obteniendo las materias", error);
        });

    this.modelosService.obtenerNiveles()
      .subscribe(
        (niveles) => {
          this._niveles = niveles;
        },
        (error) => {
          console.log("Error obteniendo los niveles", error);
        });
  }

  confirmar() {
    if(this.formDatos.valid) {

      let modelo: Modelo;

      this.cargarArchivos(this.uploadedFiles)
        .then((archivos) => {
            modelo = {
              nombre: this.formDatos.controls["nombre"].value,
              institucion: this.formDatos.controls["institucion"].value,
              materia: this.formDatos.controls["materia"].value,
              carrera: this.formDatos.controls["carrera"].value,
              nivel: this.formDatos.controls["nivel"].value,
              publico: this.formDatos.controls["publico"].value,
              archivos: archivos,
              usuario: Number(this.idUser)
            }


            this.modelosService.subirModelo(modelo)
              .subscribe(
                () => {
                  this.snackBar.open('El modelo fue cargado correctamente', "", {
                    duration: 1500,
                    horizontalPosition: "end",
                    verticalPosition: "top",
                    panelClass: ['green-snackbar']
                  });
                  if(localStorage.getItem('rol') == 'particular'){
                    this.router.navigate(['mis-modelos-particular'])

                  }else{
                    this.router.navigate(['mis-modelos-alumno'])

                  }

                  this.formDatos.reset();
                  this.fileUploadComponent.clear();
                },
                (error) => {
                  //!= 200
                  console.error("Hubo un error", error);
                });
            });
    } else {
      this.formDatos.markAllAsTouched();
    }
  }

  cargarArchivos = async (archivos: any[]): Promise<Documento[]> => {
    return await Promise.all(archivos.map(async (modelo): Promise<Documento> => {
      return {
        nombre: modelo.name,
        tamanio: modelo.size,
        extension: modelo.type,
        datos: await this.cargarArchivo(modelo)
      }
    }));
  }

  cargarArchivo = async (modelo: any): Promise<string> => {
    let base64 = await new Promise((resolve) => {
      let fileReader = new FileReader();
      fileReader.onload = (e) => resolve(fileReader.result);
      fileReader.readAsDataURL(modelo);
    });
    return base64 as string;
  }

  seleccionarModelo(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    console.log("Se selecciono uno o mas archivos");
  }

  cancelarSeleccionDeModelos() {
    this.uploadedFiles.length = 0;
    console.log("Se cancelo la seleccion de archivos");
  }

  borrarModelo(event) {
    this.uploadedFiles.forEach((modelo, indice) => {
      if (modelo == event.file) {
        this.uploadedFiles.splice(indice,1);
      }
    });
    console.log("Se elimino un modelo");
  }
}
