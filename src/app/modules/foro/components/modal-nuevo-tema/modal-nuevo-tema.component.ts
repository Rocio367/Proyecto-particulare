import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { data } from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-nuevo-tema',
  templateUrl: './modal-nuevo-tema.component.html',
  styleUrls: ['./modal-nuevo-tema.component.scss']
})
export class ModalNuevoTemaComponent implements OnInit {
  titulo: any[] = ['Consultas de Física','Consultas de Quimica','Consultas de Sociologia'];
  filteredTitulo :any[] = [];
  formDatos = this.form.group({
    titulo: ['',Validators.required],
    descripcion: ['', Validators.required],
   
  });
  constructor(private router: Router,private form: FormBuilder,private _snackBar : MatSnackBar) { 
  }

  ngOnInit(): void {

  }
  enviar(){
    if(this.formDatos.valid) {

      this._snackBar.open("El tema fue correctamente", "", {
        duration: 1500,
        horizontalPosition: "end",
        verticalPosition: "top",
        panelClass: ['green-snackbar']
      });
      this.router.navigate(['temas-foro'])
      return true;
    } else {
      this.formDatos.markAllAsTouched();
    }
  }
  filterTitulo(event) {
    this.filteredTitulo=this.titulo.filter(d=>d.toLowerCase().includes(event.query.toLowerCase()))
}
}
