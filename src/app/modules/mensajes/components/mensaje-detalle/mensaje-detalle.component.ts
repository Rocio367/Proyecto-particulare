import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/core/services/mensajes/mensajes.service';
import { Mensaje } from 'src/app/shared/models/mensaje';

@Component({
  selector: 'app-mensaje-detalle',
  templateUrl: './mensaje-detalle.component.html',
  styleUrls: ['./mensaje-detalle.component.scss']
})
export class MensajeDetalleComponent implements OnInit {
  @Input() mensaje: Mensaje;
  @Input() responder = true;
  respuestas: any[] = [];
  idUser=localStorage.getItem('idUser');
  resp = false;
  html = ''
  asunto: string;
  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router, private mensajeServices: MensajesService) {

  }

  ngOnInit(): void {


  }

  verRespuestas() {
    if (this.respuestas.length == 0) {
      this.mensajeServices.getDetalle(this.mensaje.id).subscribe(res => {
        console.log(res)
        this.resp = true;
        if( res.respuestas.length > 0){
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
        
        }else{

          let m = new Mensaje();
          m.id = Number(res.mensaje.id);
          this.asunto = res.mensaje.asunto;
          m.contenido = res.mensaje.contenido;
          m.fecha = new Date(res.mensaje.fecha);
          m.destinatario = res.mensaje.receptor.nombre + ',' + res.mensaje.receptor.apellido;
          m.emisor = res.mensaje.nombre + ',' + res.mensaje.apellido;

          this.respuestas.push(m)
          if (res.mensaje.emisor.id == this.idUser && !res.mensaje.leidoEmisor) {
            this.mensajeServices.marcarMensajeComoLeido(res.mensaje.id, this.idUser).subscribe(res => {
              console.log(res)
            })
          }
          if (res.mensaje.receptor.id == this.idUser && res.mensaje.leidoReceptor) {
            this.mensajeServices.marcarMensajeComoLeido(res.mensaje.id, this.idUser).subscribe(res => {
              console.log(res)
            })
          }

          if (res.mensaje.emisor.id == this.idUser) {
            m.emisor = 'Mi';
          }


          if (res.mensaje.receptor.id == this.idUser) {
            m.destinatario = 'Mi';
          }
      
        }
     
      })
    }


  }
 

  verContenido(m) {
    let element = document.getElementById(m.id);


    if (element.classList.contains('hidden')) {
      $('#' + m.id).removeClass('hidden');
      $('#b-' + m.id).removeClass('hidden');
    } else {
      $('#' + m.id).addClass('hidden');
      $('#b-' + m.id).addClass('hidden');
    }
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

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
    let element = document.getElementById(m.id);
    element.innerHTML = m.contenido;
    
    if (element.classList.contains('hidden')) {
      $('#' + m.id).removeClass('hidden');
      $('#b-' + m.id).removeClass('hidden');
    } else {
      $('#' + m.id).addClass('hidden');
      $('#b-' + m.id).addClass('hidden');
    }
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

  }
}
