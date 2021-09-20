import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-consulta',
  templateUrl: './modal-consulta.component.html',
  styleUrls: ['./modal-consulta.component.scss']
})
export class ModalConsultaComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private form:FormBuilder,) { 
    this.loginForm = this.form.group({
      consulta:['', [Validators.required]],
      email:['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

}
