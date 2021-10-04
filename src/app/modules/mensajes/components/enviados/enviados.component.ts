import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/shared/models/mensaje';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enviados',
  templateUrl: './enviados.component.html',
  styleUrls: ['./enviados.component.scss']
})
export class EnviadosComponent implements OnInit {
  enviados: Mensaje[] = [];
  mensaje: Mensaje;
  responder=false;
  constructor() {
    let m1 = new Mensaje();
    m1.asunto = 'asunto ';
    m1.contenido = 'contenido ';
    m1.fecha = new Date();
    m1.emisor = 'username emisor';
    m1.destinatario = 'username destinatario';
    m1.leido = false;
  
    this.enviados.push(m1)
  }

  ngOnInit(): void {
  }
  delete(m: Mensaje) {

    this.enviados.splice(this.enviados.indexOf(m), 1);
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
