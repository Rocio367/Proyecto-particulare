import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/shared/models/mensaje';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recibidos',
  templateUrl: './recibidos.component.html',
  styleUrls: ['./recibidos.component.scss']
})
export class RecibidosComponent implements OnInit {
  recibidos: Mensaje[] = [];
  mensaje: Mensaje;
  constructor() {
    let m1 = new Mensaje();
    m1.asunto = 'asunto ';
    m1.contenido = 'contenido ';
    m1.fecha = new Date();
    m1.emisor = 'username emisor';
    m1.destinatario = 'username destinatario';
    m1.leido = false;
    let m2 = new Mensaje();
    m2.asunto = 'asunto ';
    m2.contenido = 'contenido ';
    m2.fecha = new Date();
    m2.emisor = 'username emisor';
    m2.destinatario = 'username destinatario';
    m2.leido = true;

    let m3 = new Mensaje();
    m3.asunto = 'asunto ';
    m3.contenido = 'contenido ';
    m3.fecha = new Date();
    m3.emisor = 'username emisor';
    m3.destinatario = 'username destinatario';
    m3.leido = true;
    this.recibidos.push(m1, m2, m3)
  }

  ngOnInit(): void {
  }
  delete(m: Mensaje) {

    this.recibidos.splice(this.recibidos.indexOf(m), 1);
    Swal.fire(
      'El mensaje se movio a la papalera',
      '',
      'success'
    )
  }

  seleccion(m:Mensaje){
    this.mensaje=m;
  }

  
}

