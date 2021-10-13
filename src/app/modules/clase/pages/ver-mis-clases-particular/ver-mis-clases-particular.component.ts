import { Component, OnInit } from '@angular/core';
import { Clase } from 'src/app/shared/models/clase';

@Component({
  selector: 'app-ver-mis-clases-particular',
  templateUrl: './ver-mis-clases-particular.component.html',
  styleUrls: ['./ver-mis-clases-particular.component.scss']
})
export class VerMisClasesParticularComponent implements OnInit {



  orden=[{name:'Mas recientes',code:'1'},{name:'Mas antiguos',code:'2'}]
  filtro=[{name:'Disponible',code:'1'},{name:'No disponible',code:'2'}]
  clases: Clase[];

  sortOrder: number;
  sortKey='id';
  sortField: string;
  selectedEstado:string;

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
