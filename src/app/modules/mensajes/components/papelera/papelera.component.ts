import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/shared/models/mensaje';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-papelera',
  templateUrl: './papelera.component.html',
  styleUrls: ['./papelera.component.scss']
})
export class PapeleraComponent implements OnInit {

  eliminados: Mensaje[] = [];
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
  
    this.eliminados.push(m1)
  }

  ngOnInit(): void {
  }
  add(m: Mensaje) {

    this.eliminados.push(m)
    Swal.fire(
      'El mensaje restaurado con exito',
      '',
      'success'
    )
  }

  seleccion(m:Mensaje){
    this.mensaje=m;
  }

}
