import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAubirArchivoComponent } from '../../components/modal-aubir-archivo/modal-aubir-archivo.component';

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
    this.dialog.open(ModalAubirArchivoComponent, { panelClass: 'custom-dialog-container'});

  }

}


