import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/shared/models/mensaje';
import { ModalResponderComponent } from '../modal-responder/modal-responder.component';

@Component({
  selector: 'app-mensaje-detalle',
  templateUrl: './mensaje-detalle.component.html',
  styleUrls: ['./mensaje-detalle.component.scss']
})
export class MensajeDetalleComponent implements OnInit {
  @Input() mensaje: Mensaje;
  @Input() responder = true;
  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  respuesta() {
    this.router.navigate(['nuevo-mensaje'])
  }

}
