import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tema } from 'src/app/shared/models/tema';
import Swal from 'sweetalert2';
import { ModalNuevoTemaComponent } from '../../components/modal-nuevo-tema/modal-nuevo-tema.component';

@Component({
  selector: 'app-temas-foro',
  templateUrl: './temas-foro.component.html',
  styleUrls: ['./temas-foro.component.scss']
})
export class TemasForoComponent implements OnInit {

  temas : Tema[]=[];
  constructor() {
    let t1=new Tema();
    let t2=new Tema();
    t1.titulo='Tema 1';
    t2.titulo='Tema 2';
    t1.descripcion='Descripcion'
    t2.descripcion='Descripcion'
    t1.seguidores=3;
    t2.seguidores=6;
    t1.fecha=new Date();
    t2.fecha=new Date();
    this.temas.push(t1,t2)
   }

  ngOnInit(): void {
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


