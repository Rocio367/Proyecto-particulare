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


  selectedType='1';
  tipos: any[] = [{ code: '1', name: 'Contratar solo resolucion', },
  { code: '2', name: 'Contratar resolucion y explicacion' },]

 
  
  constructor() {
  

  }
  ngOnInit(): void {
  }

  confirmarPagar() {

  }

 



}
