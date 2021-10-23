import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModelosService } from 'src/app/core/services/modelos/modelos.service';
import { Documento } from 'src/app/shared/models/documento';
import { Modelo } from 'src/app/shared/models/modelo';

@Component({
  selector: 'app-modal-aubir-archivo',
  templateUrl: './modal-aubir-archivo.component.html',
  styleUrls: ['./modal-aubir-archivo.component.scss']
})
export class ModalAubirArchivoComponent implements OnInit {
  uploadedFiles: any[] = [];
  instituciones: any[] = ['UBA','UTN','UADE'];
  filteredIntitucion :any[] = [];

  carreras: any[] = ['Psicología','Abogacia','Derecho'];
  filteredCarreras :any[] = [];

  materias: any[] = ['Física','Química','Sociologia', 'Historia de la Psicología'];
  filteredMateria :any[] = [];
  public progress: number;
  formDatos: FormGroup;
  dataimage: any;
  @ViewChild('fileInput') fileInput: ElementRef;
  files = '';
  message=false;

  constructor(private form: FormBuilder,public snackBar: MatSnackBar, private modelosService: ModelosService) {

  }

  ngOnInit(): void {
    this.formDatos = this.form.group({
      institucion: ['', [Validators.required]],
      carrera: ['',Validators.required],
      materia: ['',Validators.required],
      nivel: ['',Validators.required],
    });
  }

  confirmar(){

    if(this.formDatos.valid) {

      let modelo: Modelo;

      this.cargarArchivos(this.uploadedFiles)
        .then((archivos) => {
            modelo = {
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

  filterIntitucion(event) {
        this.filteredIntitucion=this.instituciones.filter(d=>d.toLowerCase().includes(event.query.toLowerCase()))
  }
  filterCarrera(event) {
        this.filteredCarreras=this.carreras.filter(d=>d.toLowerCase().includes(event.query.toLowerCase()))
  }
  filterMateria(event) {
    this.filteredMateria=this.materias.filter(d=>d.toLowerCase().includes(event.query.toLowerCase()))
  }
}
