import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Mensaje } from 'src/app/shared/models/mensaje';
import { ModalResponderComponent } from '../../components/modal-responder/modal-responder.component';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  nuevo(){
    this.dialog.open(ModalResponderComponent, { panelClass: 'custom-dialog-container', data: new Mensaje});
  
}
}
