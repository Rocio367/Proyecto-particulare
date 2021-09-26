import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-postulacion-modelos',
  templateUrl: './modal-postulacion-modelos.component.html',
  styleUrls: ['./modal-postulacion-modelos.component.scss']
})
export class ModalPostulacionModelosComponent implements OnInit {
  formPaso1: FormGroup;
  tipos: any[] = [{ id: '1', nombre: 'En menos de 24 horas', },
  { id: '2', nombre: 'En mas de 24 horas' },
  { id: '3', nombre: 'En mas de 48 horas' },
  { id: '4', nombre: 'En mas de 72 horas' },
  ]



  constructor(private form: FormBuilder, private router: Router) {
    

  }
  ngOnInit(): void {
    this.formPaso1 = this.form.group({
      demora: [''],
      costoDos: [''],
      costoUno: [''],
    //  masExplicacion: [true],
    //  soloResolucion: [true],
    });

  }

  confirmar() {
    Swal.fire(
      'La postulacion fue exito',
      '',
      'success'
    )
  }





}
