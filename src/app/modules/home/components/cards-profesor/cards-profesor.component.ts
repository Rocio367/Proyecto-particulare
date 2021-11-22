import { Component, Input, OnInit } from '@angular/core';
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
  @Input() data:any;
  element: any[] = [];

  constructor() { 
    
  }
  ngOnInit(): void {
    console.log(this.data)
  }

}

