import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAubirArchivoComponent } from '../../components/modal-aubir-archivo/modal-aubir-archivo.component';

@Component({
  selector: 'app-modelos-alumno',
  templateUrl: './modelos-alumno.component.html',
  styleUrls: ['./modelos-alumno.component.scss']
})
export class ModelosAlumnoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  subirArchivo(){
    this.dialog.open(ModalAubirArchivoComponent, { panelClass: 'custom-dialog-container'});

  }

}
