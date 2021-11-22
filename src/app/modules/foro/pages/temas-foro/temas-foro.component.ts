import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Tema } from 'src/app/shared/models/tema';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-temas-foro',
  templateUrl: './temas-foro.component.html',
  styleUrls: ['./temas-foro.component.scss']
})
export class TemasForoComponent implements OnInit {
  selectedEstado:string;
  estados=[{name:'Que sigo',code:'1'},{name:'Creados por mí',code:'2'}]

  selectedOrder:string;
  orden=[{name:'Más recientes',code:'1'},{name:'Más antiguos',code:'2'},{name:'Con más likes',code:'3'}]
  temas : Tema[]=[];
  constructor( private primengConfig: PrimeNGConfig,) {
    let t1=new Tema();
    let t2=new Tema();
    t1.titulo='Matemáticas - Problemas de logaritmos';
    t2.titulo='Diseño web - Teoría del color';
    t1.descripcion='Este es un tema para aclarar dudas sobre problemas de logaritmos para un nivel universitario '
    t2.descripcion='Este es un tema para profundizar en la teoría del color orientado a un ámbito de diseño en la web '
    t1.seguidores=30;
    t2.seguidores=60;
    t1.fecha=new Date();
    t2.fecha=new Date();
    this.temas.push(t1,t2)
   }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

  }
 

  like(t:Tema){
     
     this.temas[ this.temas.indexOf(t)].seguidores++;
     this.temas[ this.temas.indexOf(t)].like=!this.temas[ this.temas.indexOf(t)].like;
  }

  delete(){
    Swal.fire(
      'El tema fue eliminado correctamente',
      '',
      'success'
    )
  }

}


