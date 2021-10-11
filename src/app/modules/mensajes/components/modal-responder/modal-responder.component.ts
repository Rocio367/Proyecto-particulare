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
  text:string;
  constructor() { 
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
