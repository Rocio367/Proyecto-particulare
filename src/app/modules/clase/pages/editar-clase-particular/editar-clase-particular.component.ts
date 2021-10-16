import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-clase-particular',
  templateUrl: './editar-clase-particular.component.html',
  styleUrls: ['./editar-clase-particular.component.scss']
})
export class EditarClaseParticularComponent implements OnInit {

  clase=[{name:'Online',code:'1'},{name:'Presencial',code:'2'}]
  tipo=[{name:'Individual',code:'1'},{name:'Grupal',code:'2'}]

  formDatos = this.form.group({
    fotoPerfil: [''],
    materia: ['', Validators.required],
    nivel: ['', Validators.required],
    onlineTreFalse: ['', [Validators.email, Validators.required]],
    tipo: ['', Validators.required],
    precio: ['', Validators.required],
    descripcion: ['', Validators.required],
  });


  constructor(private form: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
  }


  registrarClase(){
    if(this.formDatos.valid) {
      this.router.navigate(['/detalle-clase']);
      return true;
    } else {
      console.log(this.formDatos);
      this.formDatos.markAllAsTouched();
    }
    
  }


}
