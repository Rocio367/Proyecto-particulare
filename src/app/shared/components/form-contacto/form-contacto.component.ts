import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/core/services/general/general.service';
import { ConsultaRequest } from 'src/app/shared/models/consultaRequest';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.scss']
})
export class FormContactoComponent implements OnInit {

  formDatos: FormGroup;
  constructor(private form: FormBuilder, private services: GeneralService) {
    this.formDatos = this.form.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  consultar() {
    let datos = new ConsultaRequest();
    datos.email = this.formDatos.get('email').value;
    datos.name = this.formDatos.get('name').value;
    datos.message = this.formDatos.get('message').value;

    Swal.fire(
      'La consulta fue enviada con exito!',
      '',
      'success'
    )




  }

}

