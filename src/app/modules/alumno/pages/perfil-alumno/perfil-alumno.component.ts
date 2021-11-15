import { Component, OnInit } from '@angular/core';
import { AlumnnoService } from 'src/app/core/services/alumno/alumnno.service';
import { CardModel } from 'src/app/shared/models/card';
import { Clase } from 'src/app/shared/models/clase';

export interface Section {
  name: string;
  updated: Date;
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.scss']
})
export class PerfilAlumnoComponent implements OnInit {

  beneficios: CardModel[]
  clases: Clase[]
  idUser=localStorage.getItem('idUser');
  user:any;
  constructor(private alumnoService:AlumnnoService) { 
   this.alumnoService.buscarPorId(Number(this.idUser)).subscribe(res=>{
     console.log(res)
   //  this.user=res;
   }
    )
  }

   folders: Section[] = [
    {
      name: 'Clase 1',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Clase 2',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Clase 3',
      updated: new Date('1/28/16'),
    }
  ];

  ngOnInit() {

    this.beneficios = [
      { titulo: 'Pack 20 clases 10%', subtitulo: 'Descuentos', contenido: 'This card has divider and indeterminate progress as footer'},
      { titulo: '20% de descuento', subtitulo: 'Descuentos', contenido: 'Si sos un suscriptor activo de la página durante un año.'},
      { titulo: 'Primer clase GRATIS', subtitulo: 'Descuentos', contenido: 'Podes probar nuestros servicios gratuitamente la primera vez.'}
    ];

    
  }
}