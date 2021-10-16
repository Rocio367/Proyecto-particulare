import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { data } from 'jquery';
import { Patters } from 'src/app/shared/models/patters';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-aubir-archivo',
  templateUrl: './modal-aubir-archivo.component.html',
  styleUrls: ['./modal-aubir-archivo.component.scss']
})
export class ModalAubirArchivoComponent implements OnInit {
  uploadedFiles: any[] = [];
  instituciones: any[] = ['UBA','UTN','UADE'];
  filteredIntitucion :any[] = [];

  carreras: any[] = ['Psicologia','Abogacia','Derecho'];
  filteredCarreras :any[] = [];

  materias: any[] = ['Fisica','Quimica','Sociologia'];
  filteredMateria :any[] = [];
  public progress: number;
  formDatos: FormGroup;
  dataimage: any;
  @ViewChild('fileInput') fileInput: ElementRef;
  files = '';
  message=false;
  constructor(private form: FormBuilder,public snackBar: MatSnackBar) {
    this.formDatos = this.form.group({
      institucion: ['', [Validators.required]],
      carrera: ['',Validators.required],
      materia: ['',Validators.required],
    });


  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

}
  ngOnInit(): void {
  }
  confirmar(){
    if(this.formDatos.valid) {
      this.snackBar.open('El modelo fue cargado correctamente', 'x')
    } else {
      this.formDatos.markAllAsTouched();
    }
  }

  filterIntitucion(event) {
        this.filteredIntitucion=this.instituciones.filter(d=>d.toLowerCase().includes(event.query.toLowerCase()))
  }
  filterCarrera(event) {
        this.filteredCarreras=this.carreras.filter(d=>d.toLowerCase().includes(event.query.toLowerCase()))
  }
  filterMateria(event) {
    this.filteredMateria=this.materias.filter(d=>d.toLowerCase().includes(event.query.toLowerCase()))
}
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['red-snackbar'],
    });
  }

}
