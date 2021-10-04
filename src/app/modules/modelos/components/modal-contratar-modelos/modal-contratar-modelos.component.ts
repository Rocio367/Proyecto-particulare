import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Archivo } from 'src/app/shared/models/archivo';
import { Patters } from 'src/app/shared/models/patters';
import { RegistroCalendar } from 'src/app/shared/models/registroCalendario';

@Component({
  selector: 'app-modal-contratar-modelos',
  templateUrl: './modal-contratar-modelos.component.html',
  styleUrls: ['./modal-contratar-modelos.component.scss']
})
export class ModalContratarModelosComponent implements OnInit {

  formPaso1: FormGroup;
  formPaso2: FormGroup;
  tipos: any[] = [{ id: '1', nombre: 'Contratar solo resolucion', },
  { id: '2', nombre: 'Contratar resolucion y explicacion' },]

  metodos: any[] = [{ id: '1', nombre: 'Mercado pago', icon: 'mercadoPago' },
  { id: '2', nombre: 'Rapipago', icon: 'rapipago' },
  { id: '3', nombre: 'Pagofacil', icon: 'pagofacil' }];
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: {archivo:Archivo , particular: number},
    private form: FormBuilder, private router: Router) {
    this.formPaso1 = this.form.group({
      tipo: ['2', [Validators.required]],
     
    });

    this.formPaso2 = this.form.group({
      metodo: ['1', [Validators.required]],

    });
  }
  ngOnInit(): void {
  }

  guardarDatosPaso1() {

  }

  guardarDatosPaso2() {

  }



}
