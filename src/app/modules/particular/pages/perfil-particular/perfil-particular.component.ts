import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clase } from 'src/app/shared/models/clase';

@Component({
  selector: 'app-perfil-particular',
  templateUrl: './perfil-particular.component.html',
  styleUrls: ['./perfil-particular.component.scss']
})
export class PerfilParticularComponent implements OnInit {
  datosAcademicos:any[]=[{titulo:'Ingenieria en infromatica',desde:'2015',hasta:'2018',doc:'https://image.slidesharecdn.com/certificadoparticipantes-140819025230-phpapp01/95/certificado-participantes-1-638.jpg?cb=1408416938'}]
  clases: any[]
  open=false;
  openTipo='';
  constructor(private router:Router) { }
  uploadedFiles: any[] = [];

  ngOnInit(): void {

    this.clases = [
      { id:1,materia: 'Ingles basico', fecha: new Date(2021, 9, 10),cantidadDeAlumnos: 5,calificacion:5},
      {id:2, materia: 'Ingles Avanzado', fecha: new Date(2021, 9, 10),cantidadDeAlumnos: 5,calificacion:5},
      {id:3, materia: 'Programacion OPP', fecha: new Date(2021, 9, 10),cantidadDeAlumnos: 5,calificacion:5},
     
    ];

  }
   
  crear(){
   this.open=true;
   this.openTipo='crear'
  }
  confirmar(){
    this.open=true;
    this.openTipo;

   }
  editar(item:any){
    this.open=true;
    this.openTipo='editar'

  }
  close(){
    this.open=false;
    this.openTipo=''

  }
  eliminar(){

  }
  oponDoc(doc){
    window.open(doc)

  }
  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

}
  verDetalle(l:any){
    let id=l.id;
    this.router.navigate(['detalle-modelo-alumno', {  q: id  }])
  }
}
