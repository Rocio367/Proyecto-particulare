import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSubirArchivoComponent } from '../../components/modal-subir-archivo/modal-subir-archivo.component';

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
    this.dialog.open(ModalSubirArchivoComponent, { panelClass: 'custom-dialog-container'});

  }

}
