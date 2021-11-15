import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-valorar',
  templateUrl: './modal-valorar.component.html',
  styleUrls: ['./modal-valorar.component.scss']
})
export class ModalValorarComponent implements OnInit {

  
  formPaso1: FormGroup;
  idUser=localStorage.getItem('idUser');

  constructor(private form: FormBuilder, private router: Router) {
    this.formPaso1 = this.form.group({
      valoracion: ['0', [Validators.required]],
     
    });


  }
  ngOnInit(): void {
  }

  guardarDatosPaso1() {

  }




}
