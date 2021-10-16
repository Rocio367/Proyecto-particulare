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
  selector: 'app-mis-modelos-alumno',
  templateUrl: './mis-modelos-alumno.component.html',
  styleUrls: ['./mis-modelos-alumno.component.scss']
})
export class MisModelosAlumnoComponent implements OnInit {

  archivos: Archivo[]=[];
  sortOptions: SelectItem[];

  sortOrder: number;
  sortKey='id';
  sortField: string;
  selectedEstado:string;
  estados=[{name:'Todos',code:''},{name:'Guardados',code:'1'},{name:'Pendiente de respuesta',code:'2'},{name:'Resuelto',code:'3'}]

  selectedOrder:string;
  orden=[{name:'Más recientes',code:'1'},{name:'Más antiguos',code:'2'}]


  constructor( private primengConfig: PrimeNGConfig,private router:Router) {
  
    this.primengConfig.ripple = true;
    let a2=new Archivo();
    a2.id=2;
    a2.archivos=['https://static.filadd.com/files/f%2350479/html/external_resources/bg1.png']
    a2.nombre='Historia de la Psicología'
    a2.fecha=new Date;
    a2.seguidores=9;
    a2.profesores=['particular 1']
    a2.estado='Pendiente de Respuesta'
    a2.carrera = 'Licenciatura en Psicología'
    a2.institucion = 'UBA'
    a2.materia = 'Psicología '
    a2.nivel = 'Universitario '

    let a3=new Archivo();
    a3.id=3;
    a3.archivos=['https://imgv2-2-f.scribdassets.com/img/document/333613744/original/9fb59343e0/1632755742?v=1']
    a3.nombre='Psicología Evolutiva: Niñez'
    a3.fecha=new Date;
    a3.seguidores=9;
    a3.profesores=['particular 1']
    a3.estado='Resuelto'
    a3.carrera = 'Licenciatura en Psicología'
    a3.institucion = 'UBA '
    a3.materia = 'Psicología '
    a3.nivel = 'Universitario '
    this.archivos.push(a2,a3)
  
  }


  
  ngOnInit(): void {
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
