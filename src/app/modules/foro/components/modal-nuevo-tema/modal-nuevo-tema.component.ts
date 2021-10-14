import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { data } from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-nuevo-tema',
  templateUrl: './modal-nuevo-tema.component.html',
  styleUrls: ['./modal-nuevo-tema.component.scss']
})
export class ModalNuevoTemaComponent implements OnInit {
  text:string;

  constructor( ) { 
  
  }

  ngOnInit(): void {

  }
  enviar(){
    Swal.fire(
      'El tema fue creado correctamente',
      '',
      'success'
    )
  }

}
