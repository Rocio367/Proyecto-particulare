import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Mensaje } from 'src/app/shared/models/mensaje';
import { Patters } from 'src/app/shared/models/patters';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-responder',
  templateUrl: './modal-responder.component.html',
  styleUrls: ['./modal-responder.component.scss']
})
export class ModalResponderComponent implements OnInit {
  formMensaje :FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Mensaje, private form: FormBuilder) { 
    this.formMensaje = this.form.group({
      destinatario: [data.destinatario, [Validators.required]],
      asunto: [data.asunto, [Validators.required]],
      mensaje: ['', [Validators.required]],
      archivo: [''],

    });
  }

  ngOnInit(): void {

  }
  enviar(){
    Swal.fire(
      'El mensaje fue enviado correctamente',
      '',
      'success'
    )
  }
}
