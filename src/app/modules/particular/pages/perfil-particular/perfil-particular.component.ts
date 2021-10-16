import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, PatternValidator } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Clase } from 'src/app/shared/models/clase';
import { Patters } from 'src/app/shared/models/patters';

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
   formDatos = this.form.group({
    titulo: ['', [Validators.required]],
    desde: ['',[Validators.required,Validators.pattern(Patters.OnlyNumber)]],
    hasta: ['',[Validators.required,Validators.pattern(Patters.OnlyNumber)]],
  });
  constructor(private router:Router,private form: FormBuilder,public snackBar: MatSnackBar) { }
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
   this.openTipo='creado'
  }
  confirmar(){
    this.open=true;
    this.openTipo;
    if(this.formDatos.valid) {
      this.snackBar.open('El dato academico fue '+this.openTipo+' correctamente',"", {
        duration: 1500,
        horizontalPosition: "end",
        verticalPosition: "top",
        panelClass: ['green-snackbar']
      });
    } else {
      this.formDatos.markAllAsTouched();
    }
   }
  editar(item:any){
    this.open=true;
    this.openTipo='editado'

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
