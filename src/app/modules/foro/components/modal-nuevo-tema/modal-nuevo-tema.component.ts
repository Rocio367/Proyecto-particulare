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
  formTema:FormGroup;
  constructor( private form: FormBuilder) { 
    this.formTema = this.form.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
});
  }

  ngOnInit(): void {

  }
  crear(){
    Swal.fire(
      'El tema fue creado correctamente',
      '',
      'success'
    )
  }

}
