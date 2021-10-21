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

  carreras: any[] = ['Psicología','Abogacia','Derecho'];
  filteredCarreras :any[] = [];

  materias: any[] = ['Física','Química','Sociologia', 'Historia de la Psicología'];
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
      nivel: ['',Validators.required],
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
      this.snackBar.open('El modelo fue cargado correctamente', "", {
        duration: 1500,
        horizontalPosition: "end",
        verticalPosition: "top",
        panelClass: ['green-snackbar']
      });
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
  

}
