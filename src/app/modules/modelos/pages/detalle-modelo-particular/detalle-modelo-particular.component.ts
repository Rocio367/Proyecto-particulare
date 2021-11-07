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
import { OfertaDeResolucion } from 'src/app/shared/models/oferta-de-resolucion';
import { AlumnnoService } from 'src/app/core/services/alumno/alumnno.service';
import { OfertaDeResolucionResponse } from 'src/app/shared/models/oferta-resolucion-response';
import { SolucionDeModeloRequest } from 'src/app/shared/models/solucion-de-modelo-request';
import { FileUpload } from 'primeng/fileupload';

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
  message=false;

  comentario:string;
  uploadedFiles: any[] = [];

  estaCargando: boolean;

  modelo: Modelo;
  oferta: OfertaDeResolucionResponse;
  idParticular: Number;
  estaCargandoOferta: boolean;
  @ViewChild(FileUpload)
  private fileUploadComponent: FileUpload;

  constructor(public snackBar: MatSnackBar,private router: ActivatedRoute, public dialogService: DialogService, private modeloService: ModelosService) {
      this.router
        .params
        .subscribe(params => {
          this.id = params.q;
        });
        this.idParticular = Number(localStorage.getItem('idUser'));
  }

  ngOnInit(): void {
    this.estaCargando = this.estaCargandoOferta = true;

    this.modeloService.obtenerModeloPorId(this.id)
    .subscribe(
      (modelo) => {
        this.modelo = modelo;
        console.log(this.modelo);
        this.modeloService.obtenerArchivosPorModelo(modelo)
          .subscribe(
            (archivos) => { 
              this.modelo.archivos = archivos;
              this.estaCargando = false;
            },
            (error) => console.error(error)
          )
      },
      (error) => console.error(error)
    );

    this.modeloService.obtenerPostulacionesPorModelo(this.id)
    .subscribe(
      (ofertas) => {
        this.oferta = ofertas.find((oferta) => oferta.usuario.id == this.idParticular);
        this.estaCargandoOferta = false;
      }
    )
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
    return this.modelo.estado == "ACTIVO";
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

  /**
  * Genera el json con los archivos subidos por el particular mas la descripcion opcional
  */
  enviarResolucion() {

    this.cargarArchivos(this.uploadedFiles).then((documentos) => {
      const solucionDeModeloRequest: SolucionDeModeloRequest = {
        idModelo: this.id,
        idUsuario: this.idParticular,
        comentarioAdicional: this.comentario,
        archivos: documentos
      }

      this.modeloService.resolverModelo(solucionDeModeloRequest)
        .subscribe(
          () => {
            this.snackBar.open('La resolucion fue enviada con exito', "", {
              duration: 1500,
              horizontalPosition: "end",
              verticalPosition: "top",
              panelClass: ['green-snackbar']
            });
            this.limpiarFormularioResolucion();
          },
          (error) => console.error(error));
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

  debeMostrarOferta(): boolean {
    return this.oferta != undefined;
  }

  puedeSubirResolucion(): boolean {
    return this.oferta != undefined && this.oferta.estado == "ACEPTADA";
  }

  cargarArchivos = async (archivosDeResolucion: any[]): Promise<Documento[]> => {
    return await Promise.all(archivosDeResolucion.map(async (archivoResolucion): Promise<Documento> => {
      return {
        nombre: archivoResolucion.name,
        tamanio: archivoResolucion.size,
        extension: archivoResolucion.type,
        datos: await this.cargarArchivo(archivoResolucion)
      }
    }));
  }

  cargarArchivo = async (archivoResolucion: any): Promise<string> => {
    let base64 = await new Promise((resolve) => {
      let fileReader = new FileReader();
      fileReader.onload = (e) => resolve(fileReader.result);
      fileReader.readAsDataURL(archivoResolucion);
    });
    return base64 as string;
  }

  seleccionarArchivoDeResolucion(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    console.log("Se seleccionó uno o más archivos");
  }

  cancelarSeleccionDeArchivoDeResolucion() {
    this.uploadedFiles.length = 0;
    console.log("Se canceló la selección de archivos");
  }

  borrarArchivoDeResolucion(event) {
    this.uploadedFiles.forEach((archivoDeResolucion, indice) => {
      if (archivoDeResolucion == event.file) {
        this.uploadedFiles.splice(indice,1);
      }
    });
    console.log("Se eliminó un archivo");
  }

  noHayArchivosSeleccionados(): boolean {
    return this.uploadedFiles.length == 0;
  }

  private limpiarFormularioResolucion() {
    this.comentario = '';
    this.fileUploadComponent.clear();
  }
}
