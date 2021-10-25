import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Archivo } from 'src/app/shared/models/archivo';
import { imgGallery } from 'src/app/shared/models/imgGallery';
import Swal from 'sweetalert2';
import { ModalPostulacionModelosComponent } from '../../components/modal-postulacion-modelos/modal-postulacion-modelos.component';

@Component({
  selector: 'app-detalle-modelo-particular',
  templateUrl: './detalle-modelo-particular.component.html',
  styleUrls: ['./detalle-modelo-particular.component.scss'],
  providers: [DialogService]
})
export class DetalleModeloParticularComponent implements OnInit {
  gallery: imgGallery[] = [];
  resoluciones: any[] = [{nombre:'Resolución',doc:'https://2.bp.blogspot.com/-9jVR3GjWcn8/UZxBIaDMe7I/AAAAAAAAFuk/62w7V-Xo6Jg/s1600/GEOMETRIA+PLANA+Y+DEL+ESPACIO+PROBLEMAS+RESUELTOS+TIPO+EXAMEN+DE+ADMISION+UNI+(4).gif'}];
  archivo = new Archivo;
  public progress: number;
  archivoForm: FormGroup;
  dataimage: any;
  id:number ;
  alumno={nombreCompleto:'Agustin Rios',edad:16}
  @ViewChild('fileInput') fileInput: ElementRef;
  files = '';
  message=false;

  //
  comentario:string;
  uploadedFiles: any[] = [];

  constructor(public snackBar: MatSnackBar,private router: ActivatedRoute, public dialogService: DialogService) {
      this.router
        .params
        .subscribe(params => {
          this.id = params.q;
        });

        this.archivo.archivos = ['https://www.altillo.com/examenes/uba/farmaciaybioquim/fisicoquimica/fisicoquimica2001final/fisico.gif']
        this.archivo.nombre = '1° Examen de Fisicoquímica '
        this.archivo.carrera = 'Ciencias Biologicas '
        this.archivo.institucion = 'UBA '
        this.archivo.materia = 'Fisicoquímica '
        this.archivo.nivel = 'Universitario '
        this.archivo.fecha = new Date;
        this.archivo.seguidores = 40;

  
  }

  ngOnInit(): void {
    if(this.id==1 || this.id == 2 || this.id==3){
      this.archivo.estado='resolver';
    }else 
    if(this.id==4 ){
      this.archivo.estado='pendiente';
    } else 
    if(this.id==5 ){
      this.archivo.estado='resuelto';
    }
  }
  open(n: number) {
    window.open('./assets/img/' + this.gallery[n].path)
  }
  openRes(n: string) {
    window.open( n)
  }
  contratar() {

  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

  //  this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
  postularme(){
    this.dialogService.open(ModalPostulacionModelosComponent, {
      data: {
        idModelo: this.id
      },
      header: 'Postularme par resolver ' + this.archivo.nombre});
  }
 

  confirmar() {
    Swal.fire(
      'El archivo fue subido correctamente',
      '',
      'success'
    )
  }
 

  enviar(){
    this.snackBar.open('La resolucion fue enviada con exito', "", {
      duration: 1500,
      horizontalPosition: "end",
      verticalPosition: "top",
      panelClass: ['green-snackbar']
    });
  }
}
