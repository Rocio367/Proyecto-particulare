import { ChangeDetectionStrategy, Component, ElementRef, DoCheck, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { data } from 'jquery';
import { Patters } from 'src/app/shared/models/patters';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-aubir-archivo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal-aubir-archivo.component.html,
  styleUrls: ['./modal-aubir-archivo.component.scss']
})
export class ModalAubirArchivoComponent implements OnInit, DoCheck {
  uploadedFiles: any[] = [];
  instituciones: any[] = ['UBA', 'UTN', 'UADE'];
  filteredIntitucion: any[] = [];
  mostrarUniversidad = true;
  mostrarCarrera = true;

  niveles: any[] = [{ code: '1', name: 'Primaria' }, { code: '2', name: 'Secundaria' }, { code: '3', name: 'Universitario / Terciario' }]


  filteredCarreras: any[] = [];

  materias: any[] =[];
  materiasPrimariaSecundaria: any[] = [{code:'1',name:'Física'},{code:'2',name: 'Química'}, {code:'3',name:'Sociologia'},{code:'4',name: 'Historia de la Psicología'}];
  materiasUnivesidadTerciarios: any[] =  [{code:'1',name:'Física'},{code:'2',name: 'Química'}, {code:'3',name:'Sociologia'},{code:'4',name: 'Historia de la Psicología'}];
 
  universidades: any[] =  [{code:'1',name:'UBA'},{code:'2',name: 'UNLAM'}, {code:'3',name:'UTN'},{code:'4',name: 'UADE'}];


  carreras: any[] =  [{code:'1',name:'Psicología'},{code:'2',name: 'Abogacia'}, {code:'3',name:'Derecho'}];

  public progress: number;
  formDatos: FormGroup;
  dataimage: any;
  @ViewChild('fileInput') fileInput: ElementRef;
  files = '';
  message = false;
  constructor(private form: FormBuilder, public snackBar: MatSnackBar) {
    this.formDatos = this.form.group({
      nivel: ['', [Validators.required]],
      universidad: ['', []],
      carrera: ['',[]],
      materia: ['', Validators.required],
    });

    this.materias=[].concat(this.materiasPrimariaSecundaria)
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

  }
  ngOnInit() {

  }
  ngDoCheck() {
    console.log(this.formDatos.get('nivel').value)
    var i = this.formDatos.get('nivel').value;
    if (i.code == '1' || i.code == '2') {
      this.materias = this.materiasPrimariaSecundaria;
      this.mostrarUniversidad = false;
      this.mostrarCarrera = false;
    } else if (i.code == 3) {
      this.materias = this.materiasUnivesidadTerciarios;
      this, this.mostrarUniversidad = true;
      this.mostrarCarrera = true;

    }
  }
  confirmar() {
    if (this.formDatos.valid) {
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




}
