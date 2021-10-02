import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-reporte',
  templateUrl: './modal-reporte.component.html',
  styleUrls: ['./modal-reporte.component.scss']
})
export class ModalReporteComponent implements OnInit {
  formReporte: FormGroup;
  constructor(private form: FormBuilder) {
    this.formReporte = this.form.group({
      motivo: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

  }
  confirmar() {
    Swal.fire(
      'El reporte fue enviado correctamente',
      '',
      'success'
    )
  }

}
