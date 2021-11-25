import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultaRequest } from 'src/app/shared/models/consultaRequest';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.scss']
})
export class FormContactoComponent implements OnInit {

  formDatos: FormGroup;
  constructor(private form: FormBuilder, ) {
    this.formDatos = this.form.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }


}

