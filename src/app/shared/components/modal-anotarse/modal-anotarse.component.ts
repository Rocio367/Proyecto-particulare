import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegistroCalendar } from '../../models/registroCalendario';

@Component({
  selector: 'app-modal-anotarse',
  templateUrl: './modal-anotarse.component.html',
  styleUrls: ['./modal-anotarse.component.scss']
})
export class ModalAnotarseComponent implements OnInit {
  
  horariosForm:FormGroup;

 constructor( @Inject(MAT_DIALOG_DATA) public data: RegistroCalendar,
  private form:FormBuilder,) { 
    this.horariosForm = this.form.group({
      desde:['', [Validators.required]],
      hasta:['', [Validators.required]],
    });
  }
  ngOnInit(): void {
  }

}
