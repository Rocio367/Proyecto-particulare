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

  public progress: number;
  archivoForm: FormGroup;
  dataimage: any;
  @ViewChild('fileInput') fileInput: ElementRef;
  files = '';
  message=false;
  constructor(private form: FormBuilder,public snackBar: MatSnackBar) {
    this.archivoForm = this.form.group({
      institucion: ['', [Validators.required]],
      carrera: [''],
      materia: [''],
      archivo: ['', [Validators.required]],
    });


  }
   uploadFile = (files) => {
     this.files=files;
     console.log(files)
    if (files.length === 0) {
      this.message=false;
        this.openSnackBar('Debe cargar almenos un archivo','x')
    }else{
      let fileToUpload = <File>files[0];
      this.message=true;
      this.openSnackBar('Archivo cargado','x')

     }
   
   
  }
  ngOnInit(): void {
  }
  confirmar(){
    Swal.fire(
      'El archivo fue subido correctamente',
      '',
      'success'
    )
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
