import { Component, OnInit } from '@angular/core';
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

  constructor() { }

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

    this.clases = [
      { nombre: 'Clase 1', profesor: 'Mario', fecha: new Date(2021, 9, 10), estado: 'Finalizada', cantidadDeAlumnos: 0},
      { nombre: 'Clase 2', profesor: 'Fiorella', fecha: new Date(2021, 9, 10), estado: 'Finalizada', cantidadDeAlumnos: 0},
      { nombre: 'Clase 3', profesor: 'Rocío ', fecha: new Date(2021, 9, 10), estado: 'Ausente', cantidadDeAlumnos: 0},
      { nombre: 'Clase 4', profesor: 'Lucas ', fecha: new Date(2021, 9, 10), estado: 'Pendiente', cantidadDeAlumnos: 0},
    ];
  }
}