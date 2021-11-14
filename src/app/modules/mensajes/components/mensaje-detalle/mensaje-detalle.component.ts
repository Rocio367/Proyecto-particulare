import { V } from '@angular/cdk/keycodes';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { MensajesService } from 'src/app/core/services/mensajes/mensajes.service';
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
  respuestas: any[] = [];
  idUser = 1
  resp = false;
  html = ''
  asunto: string;
  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router, private mensajeServices: MensajesService) {

  }

  ngOnInit(): void {

    this.verRespuestas()
  }

  verRespuestas() {
    if (this.respuestas.length == 0) {
      this.mensajeServices.getDetalle(this.mensaje.id).subscribe(res => {
        this.resp = true;
        res.respuestas.forEach(element => {
          let m = new Mensaje();
          m.id = element.id;
          this.asunto = element.asunto;
          m.contenido = element.contenido;
          m.fecha = new Date(element.fecha);
          m.destinatario = element.receptor.nombre + ',' + element.receptor.apellido;
          m.emisor = element.emisor.nombre + ',' + element.emisor.apellido;

          this.respuestas.push(m)
          if (element.emisor.id == this.idUser && !element.leidoEmisor) {
            this.mensajeServices.marcarMensajeComoLeido(element.id, this.idUser).subscribe(res => {
              console.log(res)
            })
          }
          if (element.receptor.id == this.idUser && element.leidoReceptor) {
            this.mensajeServices.marcarMensajeComoLeido(element.id, this.idUser).subscribe(res => {
              console.log(res)
            })
          }

          if (element.emisor.id == this.idUser) {
            m.emisor = 'Mi';
          }


          if (element.receptor.id == this.idUser) {
            m.destinatario = 'Mi';
          }
        })
        let element = document.getElementById(String(this.mensaje.id));
        element.innerHTML = this.mensaje.contenido;
        $('#' + this.mensaje.id).removeClass('hidden');
        $('#b-' + this.mensaje.id).removeClass('hidden');
        element.scrollIntoView({ block: "center", behavior: "smooth" });
      })
    }



  }

  verContenido(m) {
    console.log('ver contenido', m)
    let element = document.getElementById(m.id);
    element.innerHTML = m.contenido;
    if (element.classList.contains('hidden')) {
      $('#' + m.id).removeClass('hidden');
      $('#b-' + m.id).removeClass('hidden');
    } else {
      $('#' + m.id).addClass('hidden');
      $('#b-' + m.id).addClass('hidden');
    }
    element.scrollIntoView();

  }
  ngOnChanges(changes: SimpleChanges) {
    this.resp = false;
    this.respuestas = []
    this.verRespuestas()
  }
  esconderRespuestas() {
    this.html = '';
    document.getElementById('respuestas').innerHTML = this.html;
    this.resp = false;

  }
  respuesta(m) {
    this.router.navigate(['nuevo-mensaje', { q: m.id }])
  }
  insertarHtml(m) {
    document.getElementById('contenido' + m.id).innerHTML = m.contenido;

  }
}
