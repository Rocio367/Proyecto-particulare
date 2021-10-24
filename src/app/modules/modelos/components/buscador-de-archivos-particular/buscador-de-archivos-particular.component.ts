import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { ModelosService } from 'src/app/core/services/modelos/modelos.service';
import { Archivo } from 'src/app/shared/models/archivo';
import { Documento } from 'src/app/shared/models/documento';
import { Modelo } from 'src/app/shared/models/modelo';

@Component({
  selector: 'app-buscador-de-archivos-particular',
  templateUrl: './buscador-de-archivos-particular.component.html',
  styleUrls: ['./buscador-de-archivos-particular.component.scss']
})
export class BuscadorDeArchivosParticularComponent implements OnInit {

  archivos: Archivo[]=[];
  sortOptions: SelectItem[];

  sortOrder: number;
  sortKey='id';
  sortField: string;
  selectedEstado:string;
  estados=[{name:'Podés solicitarlo',code:'1'},{name:'Pendiente de respuesta',code:'2'},{name:'Resuelto',code:'3'}]

  selectedOrder:string;
  orden=[{name:'Más recientes',code:'1'},{name:'Más antiguos',code:'2'}]

  modelos: Modelo[] = [];

  constructor(private primengConfig: PrimeNGConfig, private router: Router, private servicioDeModelos: ModelosService) {

    this.primengConfig.ripple = true;
  }

  ngOnInit(): void {
    this.servicioDeModelos.obtenerModelos().subscribe(
      (modelos) => {
          this.modelos = modelos;
          this.modelos.forEach(modelo => {
            this.servicioDeModelos.obtenerArchivosPorModelo(modelo).subscribe(
              (documentos) =>{
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
    );
  }

  obtenerImagenEnBase64(documento: Documento) :string {
    return `data:${documento.extension};base64,${documento.datos}`
  }
  
 verDetalle(l){  
    let id=l.id;
    this.router.navigate(['detalle-modelo-particular', {  q: id  }])
  }

}
