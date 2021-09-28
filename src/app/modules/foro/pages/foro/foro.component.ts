import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Respuestas, Tema } from 'src/app/shared/models/tema';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.scss']
})
export class ForoComponent implements OnInit {
  tema = new Tema();
  formRespuesta :FormGroup;
  constructor( private form: FormBuilder){
    this.formRespuesta = this.form.group({
      text: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
    this.tema.titulo = 'Tema 1';
    this.tema.descripcion = 'Descripcion'
    this.tema.seguidores = 6;
    this.tema.fecha = new Date();
    this.tema.like = true;
    let resp1 = new Respuestas();
    resp1.text = 'Primer comentario';
    resp1.avatar = 'default-user.png';
    resp1.user = 'Usuario 1';
    

    let r1 = new Respuestas();
    r1.text = 'Respuesta 1 primer comentario';
    r1.avatar = 'default-user.png';
    r1.user = 'Usuario 2';

    let r2 = new Respuestas();
    r2.text = 'Respuesta 2 primer comentario';
    r2.avatar = 'default-user.png';
    r2.user = 'Usuario 3';

    resp1.respuestas.push(r1, r2)
    let resp2 = new Respuestas();
    resp2.text = 'Segundo comentario';
    resp2.avatar = 'default-user.png';
    resp2.user = 'Usuario 4';

    this.tema.respuesta.push(resp1,resp2)
   
  }

  verRespuestas(r: Respuestas){
      this.tema.respuesta[this.tema.respuesta.indexOf(r)].ver=!this.tema.respuesta[this.tema.respuesta.indexOf(r)].ver;
  }
  responder(r: Respuestas){
    this.tema.respuesta[this.tema.respuesta.indexOf(r)].aResponder=!this.tema.respuesta[this.tema.respuesta.indexOf(r)].aResponder;

  }
  like(t: Tema) {
    this.tema.like = !this.tema.like;
  }

  delete() {
    Swal.fire(
      'El tema fue eliminado correctamente',
      '',
      'success'
    )
  }

  responderForm(r: Respuestas) {
    r.text='@'+r.user+ ''+this.formRespuesta.get('text').value;
    r.user='Usuario actual'
    this.tema.respuesta[this.tema.respuesta.indexOf(r)].respuestas.push(r);
    this.tema.respuesta[this.tema.respuesta.indexOf(r)].aResponder=!this.tema.respuesta[this.tema.respuesta.indexOf(r)].aResponder;

    Swal.fire(
      'Gracias por responder!',
      '',
      'success'
    )
  }
}
