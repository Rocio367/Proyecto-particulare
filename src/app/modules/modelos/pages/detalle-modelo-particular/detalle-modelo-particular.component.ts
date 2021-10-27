import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { ModelosService } from 'src/app/core/services/modelos/modelos.service';
import { Archivo } from 'src/app/shared/models/archivo';
import { Documento } from 'src/app/shared/models/documento';
import { imgGallery } from 'src/app/shared/models/imgGallery';
import { Modelo } from 'src/app/shared/models/modelo';
import Swal from 'sweetalert2';
import { ModalPostulacionModelosComponent } from '../../components/modal-postulacion-modelos/modal-postulacion-modelos.component';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-detalle-modelo-particular',
  templateUrl: './detalle-modelo-particular.component.html',
  styleUrls: ['./detalle-modelo-particular.component.scss'],
  providers: [DialogService]
})
export class DetalleModeloParticularComponent implements OnInit {
  gallery: imgGallery[] = [];
  resoluciones: any[] = [{nombre:'Resolución',doc:'https://2.bp.blogspot.com/-9jVR3GjWcn8/UZxBIaDMe7I/AAAAAAAAFuk/62w7V-Xo6Jg/s1600/GEOMETRIA+PLANA+Y+DEL+ESPACIO+PROBLEMAS+RESUELTOS+TIPO+EXAMEN+DE+ADMISION+UNI+(4).gif'}];
  archivo = new Archivo;
  public progress: number;
  archivoForm: FormGroup;
  dataimage: any;
  id:Number ;
  alumno={nombreCompleto:'Agustin Rios',edad:16}
  @ViewChild('fileInput') fileInput: ElementRef;
  files = '';
  message=false;

  //
  comentario:string;
  uploadedFiles: any[] = [];

  modelo: Modelo;

  constructor(public snackBar: MatSnackBar,private router: ActivatedRoute, public dialogService: DialogService, private modeloService: ModelosService) {
      this.router
        .params
        .subscribe(params => {
          this.id = params.q;
        });
  }

  ngOnInit(): void {

    this.modeloService.obtenerModeloPorId(this.id)
    .subscribe(
      (modelo) => {
        this.modelo = modelo;
        this.modeloService.obtenerArchivosPorModelo(modelo)
          .subscribe(
            (archivos) => this.modelo.archivos = archivos,
            (error) => console.error(error)
          )
      },
      (error) => console.error(error)
    );
  }

  openRes(n: string) {
    window.open( n)
  }

  contratar() {

  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
}

  sePuedePostularse(): boolean {
    return this.modelo.estado == "PENDIENTE";
  }

  postularme(){
    this.dialogService.open(ModalPostulacionModelosComponent, {
      data: {
        idModelo: this.id
      },
      header : 'Postularme para resolver ' + this.modelo.nombre,
      width: '50%'});
  }

  confirmar() {
    Swal.fire(
      'El archivo fue subido correctamente',
      '',
      'success'
    )
  }

  enviar(){
    this.snackBar.open('La resolucion fue enviada con exito', "", {
      duration: 1500,
      horizontalPosition: "end",
      verticalPosition: "top",
      panelClass: ['green-snackbar']
    });
  }

  obtenerImagenEnBase64(documento: Documento) :string {
    return `data:${documento.extension};base64,${documento.datos}`
  }

  verArchivo(documento: Documento) {
    var imagen = new Image();
    imagen.src = this.obtenerImagenEnBase64(documento);
    var ventana = window.open("");
    ventana.document.write(imagen.outerHTML);
  }

  descargarArchivos() {
    var zip = new JSZip();
    this.modelo.archivos.forEach((archivo: Documento, indice: number) => {
      var extension = archivo.extension.split("/")[1];
      zip.file("hoja" + (indice + 1) + "." + extension, archivo.datos, {base64: true});
    });
    zip.generateAsync({type:"blob"})
      .then(function (content) {
        saveAs(content, "examen.zip");
      });
  }
}
