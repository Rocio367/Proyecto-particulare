import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  formDatos = this.form.group({
    destinatario: ['',Validators.required],
    asunto: ['', Validators.required],
    mensaje: ['', Validators.required],
   
  });
  constructor(private form: FormBuilder,private _snackBar : MatSnackBar) { 
    
  }

  ngOnInit(): void {

  }
  enviar(){
    if(this.formDatos.valid) {
      this._snackBar.open("El mensaje fue enviado correctamente", "", {
        duration: 1500,
        horizontalPosition: "end",
        verticalPosition: "top",
        panelClass: ['green-snackbar']
      });
      return true;
    } else {
      this.formDatos.markAllAsTouched();
    }
  }
}
