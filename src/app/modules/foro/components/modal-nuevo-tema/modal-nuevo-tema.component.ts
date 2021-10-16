import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { data } from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-nuevo-tema',
  templateUrl: './modal-nuevo-tema.component.html',
  styleUrls: ['./modal-nuevo-tema.component.scss']
})
export class ModalNuevoTemaComponent implements OnInit {
  formDatos = this.form.group({
    titulo: ['',Validators.required],
    descripcion: ['', Validators.required],
   
  });
  constructor(private form: FormBuilder,private _snackBar : MatSnackBar) { 
  }

  ngOnInit(): void {

  }
  enviar(){
    if(this.formDatos.valid) {
      this._snackBar.open('El tema fue correctamente', 'x');
      return true;
    } else {
      this.formDatos.markAllAsTouched();
    }
  }

}
