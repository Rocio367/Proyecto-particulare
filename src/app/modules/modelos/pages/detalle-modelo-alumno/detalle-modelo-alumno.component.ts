import { M } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModelosService } from 'src/app/core/services/modelos/modelos.service';
import { Archivo } from 'src/app/shared/models/archivo';
import { Documento } from 'src/app/shared/models/documento';
import { imgGallery } from 'src/app/shared/models/imgGallery';
import { Modelo } from 'src/app/shared/models/modelo';
import { ModalContratarModelosComponent } from '../../components/modal-contratar-modelos/modal-contratar-modelos.component';
import { ModalValorarComponent } from '../../components/modal-valorar/modal-valorar.component';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { ActualizarEstadoModeloRequest } from 'src/app/shared/models/actualizarEstadoModeloRequest';
import Swal from 'sweetalert2';
import { ProductosService } from 'src/app/core/services/productos/productos.service';

@Component({
  selector: 'app-detalle-modelo-alumno',
  templateUrl: './detalle-modelo-alumno.component.html',
  styleUrls: ['./detalle-modelo-alumno.component.scss']
})
export class DetalleModeloAlumnoComponent implements OnInit {
  gallery: imgGallery[] = [];
  resoluciones: any[] = [{ nombre:'DocResolucion',doc: 'https://2.bp.blogspot.com/-9jVR3GjWcn8/UZxBIaDMe7I/AAAAAAAAFuk/62w7V-Xo6Jg/s1600/GEOMETRIA+PLANA+Y+DEL+ESPACIO+PROBLEMAS+RESUELTOS+TIPO+EXAMEN+DE+ADMISION+UNI+(4).gif', particular: 'Ezequiel Castillo', valoracion: null },
  { nombre:'DocResolucion2',doc: 'https://i.pinimg.com/736x/3b/12/27/3b12275ad674bbfcccde1c71b582c576.jpg', particular: 'Camila Centurion', valoracion: 5 }];
  archivo = new Archivo;
  id: number;
  modelo: Modelo;
  postulaciones:any[];
  tituloBotonCambiarEstado: string;
  comprando: boolean = false;
  idUsuario: string;

  constructor(private modeloService: ModelosService,private route: ActivatedRoute, private dialog: MatDialog, private productosService: ProductosService) {
    this.route
      .params
      .subscribe(params => {
        this.id = params.q
      });
  }

  ngOnInit(): void {

    this.modeloService.obtenerModeloPorId(this.id)
    .subscribe(
      (modelo) => {
        this.modelo = modelo;
        this.actualizarTituloBotonCambiarEstado();
        this.modeloService.obtenerArchivosPorModelo(modelo)
          .subscribe(
            (archivos) => this.modelo.archivos = archivos,
            (error) => console.error(error)
          )
      },
      (error) => console.error(error)
    );

    this.modeloService.obtenerPostulacionesPorModelo(this.id)
    .subscribe(
      (res) => {
        this.postulaciones=res;
        console.log(res)
      },
      (error) => console.error(error)
    );

    this.idUsuario = localStorage.getItem('idUser');
  }
 
  open(n: string) {
    window.open(n)
  }
  openRes(n: string) {
    window.open( n)
  }
  contratar(idOfertaResolucion: number) {
    this.comprando = true;
    // No entiendo lo del popup... por ahora dejo la llamada al servicio de compra
    // this.dialog.open(ModalContratarModelosComponent, { panelClass: 'custom-dialog-container' });
    const pedidoDeCompra = {
      idUsuario: this.idUsuario
    };
    this.productosService.iniciarCompra(idOfertaResolucion, pedidoDeCompra)
      .subscribe((procesoDeCompra) => {
        window.open(procesoDeCompra.urlExterna, "_blank");
        this.comprando = false;
      })
  }

  valorar() {
    this.dialog.open(ModalValorarComponent, { panelClass: 'custom-dialog-container' });
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

  actualizarEstadoModelo(){

    var estado = this.modelo.estado == 'ACTIVO' ? 'INACTIVO' : 'ACTIVO';
    var estadoRequest: ActualizarEstadoModeloRequest = 
    {
      estado: estado,
      idModelo: this.modelo.id
    }

    this.modeloService.actualizarEstadoModelo(estadoRequest)
      .subscribe(
        (modelo) => {
          let mensaje = modelo.estado == 'INACTIVO' ? 
            'El modelo se ha INACTIVADO correctamente' :
            'El modelo se ha ACTIVADO correctamente'
          Swal.fire(mensaje, '', 'success');
          this.modelo = modelo;
          this.modeloService.obtenerArchivosPorModelo(modelo)
            .subscribe(
            (archivos) => this.modelo.archivos = archivos,
            (error) => console.error(error)
          )
          this.actualizarTituloBotonCambiarEstado();
        },
        (error) => console.error(error)
      );
    }

    private actualizarTituloBotonCambiarEstado(): void {
      this.tituloBotonCambiarEstado = this.modelo.estado == 'ACTIVO' ? 'Inactivar modelo' : 'Activar modelo';
    }
  }
