import {A, COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { Router } from '@angular/router';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
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
  sortOptions: SelectItem[];

  sortOrder: number;
  sortKey='id';
  sortField: string;
  selectedEstado:string;
  estados=[{name:'Podés solicitarlo',code:'1'},{name:'Pendiente de respuesta',code:'2'},{name:'Resuelto',code:'3'}]

  selectedOrder:string;
  orden=[{name:'Más recientes',code:'1'},{name:'Más antiguos',code:'2'}]

  constructor( private primengConfig: PrimeNGConfig,private router:Router) {
  

    let a1=new Archivo();
    a1.id=1;
    a1.archivos=['https://cdn-v1.udocz-assets.com/uploads/book/cover/68837/examen_de_matematica_prim_inst_final_respuestas.jpg']
    a1.nombre='Ingreso Matemáticas'
    a1.fecha=new Date;
    a1.seguidores=4;
    a1.profesores=['particular 1','particular 2']
    a1.estado='Podés solicitarlo'
    a1.carrera = 'Ingeniería '
    a1.institucion = 'Unlam '
    a1.materia = 'Matemáticas '
    a1.nivel = 'Universitario '

    let a2=new Archivo();
    a2.id=2;
    a2.archivos=['https://www.altillo.com/examenes/uba/ubaxxi/matematica/Imageggesn5.gif']
    a2.nombre='1° Parcial de Matemáticas'
    a2.fecha=new Date;
    a2.seguidores=9;
    a2.profesores=['particular 1']
    a2.estado='Pendiente de respuesta'
    a2.carrera = 'Administracion de empresas '
    a2.institucion = 'UBA '
    a2.materia = 'matemáticas '
    a2.nivel = 'Universitario '

    let a3=new Archivo();
    a3.archivos=['https://cdn-v1.udocz-assets.com/uploads/book/cover/68845/examen_geometria_1_instancia_con_respuesta_final.jpg']
    a3.nombre='Ingreso -Parcial de Geometría'
    a3.fecha=new Date;
    a3.id=3;
    a3.seguidores=9;
    a3.profesores=['particular 1']
    a3.estado='Resuelto'
    a3.carrera = 'Tecnicatura en Desarrollo Web'
    a3.institucion = 'Unlam '
    a3.materia = 'Geometría '
    a3.nivel = 'Universitario '
    this.archivos.push(a1,a2,a3)
    this.archivos.push(a1,a2,a3)
    this.archivos.push(a1,a2,a3)
  
   
    
  }


  

 
  ngOnInit(): void {
 
    this.primengConfig.ripple = true;
  }


 
  like(t:Archivo){
     
    this.archivos[ this.archivos.indexOf(t)].seguidores++;
    this.archivos[ this.archivos.indexOf(t)].like=!this.archivos[ this.archivos.indexOf(t)].like;
 }
 verDetalle(l){  
    let id=l.id;
    this.router.navigate(['detalle-modelo-alumno', {  q: id  }])
 }

}
