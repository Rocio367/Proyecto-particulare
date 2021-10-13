import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.scss']
})
export class CrearClaseComponent implements OnInit {

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