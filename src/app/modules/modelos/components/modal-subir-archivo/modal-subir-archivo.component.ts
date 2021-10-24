import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileUpload } from 'primeng/fileupload';
import { ModelosService } from 'src/app/core/services/modelos/modelos.service';
import { Documento } from 'src/app/shared/models/documento';
import { Materia } from 'src/app/shared/models/materia';
import { Modelo } from 'src/app/shared/models/modelo';
import { Nivel } from 'src/app/shared/models/nivel';

@Component({
  selector: 'app-modal-subir-archivo',
  templateUrl: './modal-subir-archivo.component.html',
  styleUrls: ['./modal-subir-archivo.component.scss']
})
export class ModalSubirArchivoComponent implements OnInit {
  uploadedFiles: any[] = [];
  _materias: Materia[] = [];
  _niveles: Nivel[] = [];
  formDatos: FormGroup;
  @ViewChild(FileUpload)
  private fileUploadComponent: FileUpload;

  constructor(private form: FormBuilder,public snackBar: MatSnackBar, private modelosService: ModelosService) {

  }

  ngOnInit(): void {
    this.formDatos = this.form.group({
      nombre: ['', [Validators.required]],
      institucion: ['', [Validators.required]],
      carrera: ['',Validators.required],
      materia: ['',Validators.required],
      nivel: ['',Validators.required],
    });

    this.modelosService.obtenerMaterias()
      .subscribe(
        (materias) => {
          this._materias = materias;
        }, 
        (error) => {
          console.log("Error obeteniendo las materias", error);
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

  confirmar(){

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
              archivos: archivos
            }

            console.log(modelo);

            this.modelosService.subirModelo(modelo)
              .subscribe(
                () => {
                  this.snackBar.open('El modelo fue cargado correctamente', "", {
                    duration: 1500,
                    horizontalPosition: "end",
                    verticalPosition: "top",
                    panelClass: ['green-snackbar']
                  });
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
