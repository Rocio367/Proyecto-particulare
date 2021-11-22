import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MensajesService } from 'src/app/core/services/mensajes/mensajes.service';
import { Mensaje } from 'src/app/shared/models/mensaje';

@Component({
  selector: 'app-papelera',
  templateUrl: './papelera.component.html',
  styleUrls: ['./papelera.component.scss']
})
export class PapeleraComponent implements OnInit {

  eliminados: Mensaje[] = [];
  mensaje=undefined;
  responder = false;
  idUser=localStorage.getItem('idUser');;
  constructor(private _snackBar: MatSnackBar, private mensajeServices: MensajesService) {
    this.cargar()
  }
  cargar() {

    this.mensajeServices.eliminados(this.idUser).subscribe(res => {
       this.eliminados=[]
       this.mensaje=undefined
      res.forEach(element => {
        let m = new Mensaje();
        m.id = element.id;
        m.asunto = element.asunto;
        m.contenido = element.contenido;
        m.fecha = new Date(element.fecha);
        m.emisor = element.emisor;
        m.destinatario = element.receptor;
        if (element.emisor.id == this.idUser) {
          m.leido = element.leidoEmisor;
        }
        if (element.receptor.id == this.idUser) {
          m.leido = element.leidoReceptor;
        }
        this.eliminados.push(m)
      });
    })
  }
  ngOnInit(): void {

  }
  add(m: Mensaje) {
    this.mensajeServices.restaurar(m.id, this.idUser).subscribe(res => {
      this.cargar()

      this._snackBar.open("El mensaje fue restaurado correctamente", "", {
        duration: 1500,
        horizontalPosition: "end",
        verticalPosition: "top",
        panelClass: ['green-snackbar']
      });
    })
  }

  seleccion(m: Mensaje) {
    this.mensaje = m;
  }

}
