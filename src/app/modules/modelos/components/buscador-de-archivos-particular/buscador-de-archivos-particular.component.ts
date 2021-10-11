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
  estados = [{ name: 'Podes postularte', code: '1' }, { name: 'Pendiente de respuesta', code: '2' }, { name: 'Resuelto', code: '3' },{ name: 'Guardados', code: '2' }, { name: 'No guardados', code: '2' }]

  selectedOrder: string;
  orden = [{ name: 'Mas recientes', code: '1' }, { name: 'Mas antiguos', code: '2' }]

  constructor(private primengConfig: PrimeNGConfig, private router: Router) {

    this.primengConfig.ripple = true;

    let a1 = new Archivo();
    a1.id = 1;
    a1.archivos = ['default-placeholder.png']
    a1.nombre = 'nombre 1'
    a1.fecha = new Date;
    a1.seguidores = 4;
    a1.profesores = ['particular 1', 'particular 2']
    a1.estado = 'Podes postularte'
    a1.carrera = 'carrera '
    a1.institucion = 'institución '
    a1.materia = 'materia '
    a1.nivel = 'nivel '

    let a2 = new Archivo();
    a2.id = 2;
    a2.archivos = ['default-placeholder.png']
    a2.nombre = 'nombre 2'
    a2.fecha = new Date;
    a2.seguidores = 9;
    a2.profesores = ['particular 1']
    a2.estado = 'Podes postularte'
    a2.carrera = 'carrera '
    a2.institucion = 'institución '
    a2.materia = 'materia '
    a2.nivel = 'nivel '

    let a3 = new Archivo();
    a3.id = 3;
    a3.archivos = ['default-placeholder.png']
    a3.nombre = 'nombre 3'
    a3.fecha = new Date;
    a3.seguidores = 9;
    a3.profesores = ['particular 1']
    a3.estado = 'Podes postularte'
    a3.carrera = 'carrera '
    a3.institucion = 'institución '
    a3.materia = 'materia '
    a3.nivel = 'nivel '
    this.archivos.push(a1, a2, a3)

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
