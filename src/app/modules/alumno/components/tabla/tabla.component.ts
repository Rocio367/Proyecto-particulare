import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalResponderComponent } from 'src/app/modules/mensajes/components/modal-responder/modal-responder.component';
import { Mensaje } from 'src/app/shared/models/mensaje';

export interface PeriodicElement {
  name: string;
  profesor: string;
  date: string;
  symbol: string;
  boton: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {profesor: 'Roxana', name: 'Clase 1', date:'10/10/2012' , symbol: 'Finalizada', boton:'' },
  {profesor: 'Roxana', name: 'Clase 2', date: '10/10/2012', symbol: 'Finalizada', boton:''},
  {profesor: 'Roxana', name: 'Clase 3', date: '10/10/2012', symbol: 'Ausente', boton:''},
  {profesor: 'Roxana', name: 'Clase 4', date: '10/10/2021', symbol: 'Pendiente', boton:''},
];

@Component({
  selector: 'app-tabla-misclases',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})


export class TablaComponent {
  displayedColumns: string[] = ['name','profesor', 'date', 'symbol', 'boton','contacto'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog){}
  nuevo(){
    this.dialog.open(ModalResponderComponent, { panelClass: 'custom-dialog-container', data: new Mensaje});
  
  }
}
