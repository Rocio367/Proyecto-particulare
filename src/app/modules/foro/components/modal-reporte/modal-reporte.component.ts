import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-reporte',
  templateUrl: './modal-reporte.component.html',
  styleUrls: ['./modal-reporte.component.scss']
})
export class ModalReporteComponent implements OnInit {
  formDatos: FormGroup;
  constructor(private form: FormBuilder, private _snackBar:MatSnackBar) {
    this.formDatos = this.form.group({
      motivo: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

  }
  confirmar() {
    
    if(this.formDatos.valid) {
      this._snackBar.open("El reporte fue enviado correctamente", "", {
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
