import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MensajesService } from 'src/app/core/services/mensajes/mensajes.service';
import { Mensaje } from 'src/app/shared/models/mensaje';

@Component({
  selector: 'app-enviados',
  templateUrl: './enviados.component.html',
  styleUrls: ['./enviados.component.scss']
})
export class EnviadosComponent implements OnInit {
  enviados: Mensaje[] = [];
  mensaje: Mensaje;
  responder = false;
  idUser=localStorage.getItem('idUser');;
  constructor(private _snackBar: MatSnackBar, private mensajeServices: MensajesService) {

    this.cargar()


  }

  ngOnInit(): void {

  }
  cargar() {
    this.mensajeServices.enviados(this.idUser).subscribe(res => {
      this.enviados=[]
      this.seleccion(null)
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
        this.enviados.push(m)
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


}

