import { A, COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Archivo } from 'src/app/shared/models/archivo';

@Component({
  selector: 'app-buscador-de-archivos-particular',
  templateUrl: './buscador-de-archivos-particular.component.html',
  styleUrls: ['./buscador-de-archivos-particular.component.scss']
})
export class BuscadorDeArchivosParticularComponent implements OnInit {
  archivos: Archivo[] = [];
  sortOptions: SelectItem[];

  sortOrder: number;
  sortKey = 'id';
  sortField: string;
  selectedEstado: string;
  estados = [{ name: 'Podés postularte', code: '1' }, { name: 'Pendiente de respuesta', code: '2' }, { name: 'Resuelto', code: '3' },{ name: 'Guardados', code: '2' }, { name: 'No guardados', code: '2' }]

  selectedOrder: string;
  orden = [{ name: 'Más recientes', code: '1' }, { name: 'Más antiguos', code: '2' }]

  constructor(private primengConfig: PrimeNGConfig, private router: Router) {

    this.primengConfig.ripple = true;
    let a1=new Archivo();
    a1.archivos=['https://static.docsity.com/documents_first_pages/apuntes/2014/01/20/74ccb88c48297be707e62ae800958193.png']
    a1.nombre='Historia de la Psicología '
    a1.fecha=new Date;
    a1.seguidores=4;
    a1.profesores=['particular 1','particular 2']
    a1.estado='Podés solicitarlo'
    a1.carrera = 'Licenciatura en Psicología '
    a1.institucion = 'UBA '
    a1.materia = 'Historia de la Psicología '
    a1.nivel = 'Universitario '

    let a2=new Archivo();
    a2.id=2;
    a2.archivos=['https://www.altillo.com/examenes/uba/ubaxxi/matematica/Imageggesn5.gif']
    a2.nombre='1° Examen de Fisicoquímica'
    a2.fecha=new Date;
    a2.seguidores=9;
    a2.profesores=['particular 1']
    a2.estado='Pendiente de respuesta'
    a2.carrera = 'Ciencias Biologicas '
    a2.institucion = 'UBA '
    a2.materia = 'Fisicoquímica '
    a2.nivel = 'Universitario '

    let a3=new Archivo();
    a3.archivos=['https://imgv2-2-f.scribdassets.com/img/document/333613744/original/9fb59343e0/1632755742?v=1']
    a3.nombre='Psicología Evolutiva: Niñez'
    a3.fecha=new Date;
    a3.seguidores=9;
    a3.profesores=['particular 1']
    a3.estado='Resuelto'
    a3.carrera = 'Licenciatura en Psicología'
    a3.institucion = 'UBA '
    a3.materia = 'Psicología Evolutiva '
    a3.nivel = 'Universitario '
    this.archivos.push(a1,a2,a3)
    this.archivos.push(a1,a2,a3)
    this.archivos.push(a1,a2,a3)
  
   

  }


  ngOnInit(): void {
  }


  like(t: Archivo) {

    this.archivos[this.archivos.indexOf(t)].seguidores++;
    this.archivos[this.archivos.indexOf(t)].like = !this.archivos[this.archivos.indexOf(t)].like;
  }
  verDetalle(l) {
    let id = l.id;
    this.router.navigate(['detalle-modelo-particular', {  q: id  }])}
  
}
