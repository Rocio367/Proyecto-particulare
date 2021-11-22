import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ReseniaService } from 'src/app/core/services/resenia/resenia.service';

@Component({
  selector: 'app-modal-valorar',
  templateUrl: './modal-valorar.component.html',
  styleUrls: ['./modal-valorar.component.scss']
})
export class ModalValorarComponent implements OnInit {


  formPaso1: FormGroup;
  idUser = localStorage.getItem('idUser');
  comentario: string;
  estrellas = 1;
  constructor(public config: DynamicDialogConfig, private _snackBar: MatSnackBar, private reseniaServices: ReseniaService) {



  }
  ngOnInit(): void {

  }

  valorar() {
    if (this.comentario != '') {
      let body = {
        puntaje: this.estrellas,
        comentario: this.comentario,
        id_usuario: Number(localStorage.getItem('idUser')),
        id_producto: Number(this.config.data.id),
      }
      console.log(body)
      this.reseniaServices.guardar(body).subscribe(res => {
        this._snackBar.open("Gracias por comentar!", "", {
          duration: 1500,
          horizontalPosition: "end",
          verticalPosition: "top",
          panelClass: ['green-snackbar']
        });
      },
        (error) => {
          this._snackBar.open(localStorage.getItem('errorMensaje'), "", {
            duration: 3000,
            horizontalPosition: "end",
            verticalPosition: "top",
            panelClass: ['red-snackbar']
          });
        }
        )
    } else {
      this._snackBar.open("Debe escribir un comentario", "", {
        duration: 1500,
        horizontalPosition: "end",
        verticalPosition: "top",
        panelClass: ['red-snackbar']
      });
    }
  }

  setPuntaje(n) {
    this.estrellas = n.toString();
    console.log(this.estrellas)
  }




}
