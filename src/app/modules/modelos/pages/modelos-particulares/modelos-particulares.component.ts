import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSubirArchivoComponent } from '../../components/modal-subir-archivo/modal-subir-archivo.component';

@Component({
  selector: 'app-modelos-particulares',
  templateUrl: './modelos-particulares.component.html',
  styleUrls: ['./modelos-particulares.component.scss']
})
export class ModelosParticularesComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  subirArchivo(){
    this.dialog.open(ModalSubirArchivoComponent, { panelClass: 'custom-dialog-container'});

  }

}


