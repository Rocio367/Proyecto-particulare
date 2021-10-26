import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { ModelosService } from 'src/app/core/services/modelos/modelos.service';
import { Archivo } from 'src/app/shared/models/archivo';
import { Documento } from 'src/app/shared/models/documento';
import { FiltrosModelo } from 'src/app/shared/models/filtrosModelos';
import { Modelo } from 'src/app/shared/models/modelo';

@Component({
  selector: 'app-buscador-de-archivos',
  templateUrl: './buscador-de-archivos.component.html',
  styleUrls: ['./buscador-de-archivos.component.scss']
})
export class BuscadorDeArchivosComponent implements OnInit {

  archivos: Archivo[] = [];
  sortOptions: SelectItem[];

  sortOrder: number;
  sortKey = 'id';
  text: string;
  selectedEstado: string;
  estados = [{ name: 'Podés solicitarlo', code: '1' }, { name: 'Pendiente de respuesta', code: '2' }, { name: 'Resuelto', code: '3' }]

  selectedOrder: string;
  orden = [{ name: 'Más recientes', code: 'Asc' }, { name: 'Más antiguos', code: 'Desc' }]
  filtros = new FiltrosModelo;
  modelos: Modelo[] = [];

  idUser:string;

  constructor(private primengConfig: PrimeNGConfig, private router: Router, private servicioDeModelos: ModelosService) {
    this.idUser=localStorage.getItem('idUser');
    console.log(this.idUser)
    this.primengConfig.ripple = true;
  }

  ngOnInit(): void {
    this.obtenerTodos()
  }
 
  aplicar() {
    this.filtros.text=this.text;
    this.filtros.orden=this.selectedOrder;
    this.filtros.estado=this.selectedEstado;
   if( this.filtros.text!='' || this.filtros.orden !='' || this.filtros.estado !='' ){
     this.obtenerConFiltros()
   }else{
    this.obtenerTodos()
   }
  }

  limpiar() {
    if( this.filtros.text!='' || this.filtros.orden !='' || this.filtros.estado !='' ){
      this.obtenerConFiltros()
    }else{
     this.obtenerTodos()
    }
   }
  obtenerImagenEnBase64(documento: Documento): string {
    return `data:${documento.extension};base64,${documento.datos}`
  }

  obtenerTodos() {
    this.servicioDeModelos.obtenerModelos().subscribe((modelos) => {
      this.modelos = modelos;
      this.modelos.forEach(modelo => {
        this.servicioDeModelos.obtenerArchivosPorModelo(modelo).subscribe(
          (documentos) => {
            modelo.archivos = documentos;
          },
          (error) => {
            console.error(error);
          }
        );
      });
    },
      (error) => {
        console.error(error);
      }
    )
  }
  obtenerConFiltros() {
    this.servicioDeModelos.filtrarModelosAlumno(this.filtros).subscribe((modelos) => {
      this.modelos = modelos;
      this.modelos.forEach(modelo => {
        this.servicioDeModelos.obtenerArchivosPorModelo(modelo).subscribe(
          (documentos) => {
            modelo.archivos = documentos;
          },
          (error) => {
            console.error(error);
          }
        );
      });
    },
      (error) => {
        console.error(error);
      }
    )
  }
  verDetalle(l) {
    let id = l.id;
    this.router.navigate(['detalle-modelo-alumno', { q: id }])
  }
}
