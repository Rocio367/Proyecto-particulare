import {A, COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Archivo } from 'src/app/shared/models/archivo';

@Component({
  selector: 'app-buscador-de-archivos',
  templateUrl: './buscador-de-archivos.component.html',
  styleUrls: ['./buscador-de-archivos.component.scss']
})
export class BuscadorDeArchivosComponent implements OnInit {

  archivos: Archivo[]=[];
    
  constructor( private primengConfig: PrimeNGConfig,private router:Router) {
  
    this.primengConfig.ripple = true;

    let a1=new Archivo();
    a1.id=1;
    a1.archivos=['default-placeholder.png']
    a1.nombre='nombre 3'
    a1.fecha=new Date;
    a1.seguidores=4;
    a1.profesores=['particular 1','particular 2']
    a1.estado='Podes solicitarlo'
    a1.carrera = 'carrera '
    a1.institucion = 'institucion '
    a1.materia = 'materia '
    a1.nivel = 'nivel '

    let a2=new Archivo();
    a2.id=2;
    a2.archivos=['default-placeholder.png']
    a2.nombre='nombre 2'
    a2.fecha=new Date;
    a2.seguidores=9;
    a2.profesores=['particular 1']
    a2.estado='Pendiente de respuesta'
    a2.carrera = 'carrera '
    a2.institucion = 'institucion '
    a2.materia = 'materia '
    a2.nivel = 'nivel '

    let a3=new Archivo();
    a3.archivos=['default-placeholder.png']
    a3.nombre='nombre 2'
    a3.fecha=new Date;
    a3.id=3;
    a3.seguidores=9;
    a3.profesores=['particular 1']
    a3.estado='Resuelto'
    a3.carrera = 'carrera '
    a3.institucion = 'institucion '
    a3.materia = 'materia '
    a3.nivel = 'nivel '
    this.archivos.push(a1,a2,a3)
   
  }


  

 
  ngOnInit(): void {
  }



  like(t:Archivo){
     
    this.archivos[ this.archivos.indexOf(t)].seguidores++;
    this.archivos[ this.archivos.indexOf(t)].like=!this.archivos[ this.archivos.indexOf(t)].like;
 }
 onSelectionChange(l){  
    let id=(new String((l.value[0].id)))
    this.router.navigate(['detalle-modelo-alumno', {  q: id  }])
 }

}
