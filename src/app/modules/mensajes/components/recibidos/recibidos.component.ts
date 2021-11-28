import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MensajesService } from 'src/app/core/services/mensajes/mensajes.service';
import { Mensaje } from 'src/app/shared/models/mensaje';

@Component({
  selector: 'app-recibidos',
  templateUrl: './recibidos.component.html',
  styleUrls: ['./recibidos.component.scss']
})
export class RecibidosComponent implements OnInit {
  recibidos: Mensaje[] = [];
  mensaje: Mensaje;
  idUser=localStorage.getItem('idUser');;
  constructor(private _snackBar: MatSnackBar, private mensajeServices: MensajesService) {
    this.cargar()


  }

  ngOnInit(): void {

  }
  cargar() {
    this.mensajeServices.recibidos(this.idUser).subscribe(res => {
      
      this.seleccion(null)
      this.recibidos=[]
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
        this.recibidos.push(m)
      });
    })

  }
  delete(m: Mensaje) {
    this.mensajeServices.eliminar(m.id, this.idUser).subscribe(res => {
      this.cargar()
      this._snackBar.open("El mensaje fue eliminado correctamente", "", {
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

  // HACER --> ELIMINADO no se elimina el msj recibido por primera vez.

}

