import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  profesor: string;
  date: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {profesor: 'Roxana', name: 'Clase 1', date:'10/10/2012' , symbol: 'H'},
  {profesor: 'Roxana', name: 'Clase 2', date: '10/10/2012', symbol: 'He'},
  {profesor: 'Roxana', name: 'Clase 3', date: '10/10/2012', symbol: 'Li'},
  {profesor: 'Roxana', name: 'Clase 4', date: '10/10/2012', symbol: 'Be'},
];

@Component({
  selector: 'app-tabla-misclases',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})


export class TablaComponent {
  displayedColumns: string[] = ['name','profesor', 'date', 'symbol',];
  dataSource = ELEMENT_DATA;
}
