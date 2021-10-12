import { Component, OnInit } from '@angular/core';
import { Clase } from 'src/app/shared/models/clase';

@Component({
  selector: 'app-perfil-particular',
  templateUrl: './perfil-particular.component.html',
  styleUrls: ['./perfil-particular.component.scss']
})
export class PerfilParticularComponent implements OnInit {

  clases: Clase[]
  constructor() { }

  ngOnInit(): void {

    this.clases = [
      { nombre: 'Clase 1', profesor: 'Sergio Bonavento', fecha: new Date(2021, 9, 10), estado: 'Finalizada', cantidadDeAlumnos: 5},
      { nombre: 'Clase 2', profesor: 'Sergio Bonavento', fecha: new Date(2021, 9, 10), estado: 'Finalizada', cantidadDeAlumnos: 1},
      { nombre: 'Clase 3', profesor: 'Sergio Bonavento', fecha: new Date(2021, 9, 10), estado: 'Ausente', cantidadDeAlumnos: 5},
      { nombre: 'Clase 4', profesor: 'Sergio Bonavento', fecha: new Date(2021, 9, 10), estado: 'Pendiente', cantidadDeAlumnos: 2},
    ];

  }

}
