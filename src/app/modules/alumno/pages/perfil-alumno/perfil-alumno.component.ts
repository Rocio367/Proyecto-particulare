import { Component, OnInit } from '@angular/core';

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
  ngOnInit(): void {
  }

}