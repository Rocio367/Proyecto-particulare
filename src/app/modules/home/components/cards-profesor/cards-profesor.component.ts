import { Component, OnInit } from '@angular/core';
import { Resultado } from 'src/app/shared/models/resultado';

export interface Section {
  type: string;
  materia: string;
  name: string;
  ubicacion: string;
  descripcion: string
  stars: number;
}


@Component({
  selector: 'app-cards-profesor',
  templateUrl: './cards-profesor.component.html',
  styleUrls: ['./cards-profesor.component.scss']
})
export class CardsProfesorComponent implements OnInit {

  constructor() { }

  element: Section[] = [
    {type: 'Online',name: 'Profesor 1', materia:'Inglés principiantes' , ubicacion: 'Ituzaingó, Buenos Aires', descripcion:'Clases a distancia.',stars:1},
    {type: 'Online', name: 'Profesor 2', materia: 'Inglés intermedio', ubicacion: 'Ramos Mejía, Buenos Aires', descripcion:'Clases a distancia.',stars:5},
    {type: 'Online', name: 'Profesor 3', materia: 'Inglés básico nivel 1', ubicacion: 'San justo, Buenos Aires', descripcion:'Clases presenciales.',stars:3},    
  ];

  ngOnInit(): void {
  }

}

