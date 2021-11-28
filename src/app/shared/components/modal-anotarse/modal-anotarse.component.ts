import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Patters } from '../../models/patters';
import { RegistroCalendar } from '../../models/registroCalendario';

@Component({
  selector: 'app-modal-anotarse',
  templateUrl: './modal-anotarse.component.html',
  styleUrls: ['./modal-anotarse.component.scss']
})
export class ModalAnotarseComponent implements OnInit {

  horariosForm: FormGroup;
  pagoForm: FormGroup;
  horasDisponibles: any[] = [];
  plataformas: any[] = [{ id: '1', nombre: 'Teams', icon: 'teams' },
  { id: '2', nombre: 'Meet', icon: 'meet' },
  { id: '3', nombre: 'Zoom', icon: 'zoom' }];

  metodos: any[] = [{ id: '1', nombre: 'Mercado pago', icon: 'mercadoPago' },
  { id: '2', nombre: 'Rapipago', icon: 'rapipago' },
  { id: '3', nombre: 'Pagofacil', icon: 'pagofacil' }];
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: RegistroCalendar,
    private form: FormBuilder, private router: Router) {
    this.horasDisponibles = data.available_hours;
    this.horariosForm = this.form.group({
      desde: ['', [Validators.required, Validators.pattern(Patters.OnlyNumber)]],
      hasta: ['', [Validators.required, Validators.pattern(Patters.OnlyNumber)]],
      plataforma: ['1', [Validators.required]],
      type: ['1', [Validators.required]],
      type2: ['1', [Validators.required]],

    });

    this.pagoForm = this.form.group({
      metodo: ['1', [Validators.required]],

    });
  }
  ngOnInit(): void {
  }

  guardarDatosPaso1() {

  }

  guardarDatosPaso2() {

  }

  detalleClase() {
    this.router.navigate(['detalle-clase-coordinada/id'])
  }
}
