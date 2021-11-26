import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ReseniaService } from 'src/app/core/services/resenia/resenia.service';

export interface Section {
  name: string;
  comentario: string
  stars: number;
}

@Component({
  selector: 'app-comentarios-particular',
  templateUrl: './comentarios-particular.component.html',
  styleUrls: ['./comentarios-particular.component.scss']
})
export class ComentariosParticularComponent implements OnInit {

  id=new Number(localStorage.getItem('idUser'));
  opiniones:any[]=[];
  todas:any[]=[];
  mostrarTodas=false;
  constructor(private reseniaService:ReseniaService,private aRouter: ActivatedRoute) { 
    this.aRouter.params.subscribe(
      (params: Params) => {
        if(params.q){
          this.id = Number(params.q);
        }
      }
    );
    this.reseniaService.obtenerReseniasDelParticular(this.id).subscribe(res => {
      console.log(res)
      this.todas = res;
      this.ocultar()
    })
  }

  ngOnInit(): void {
  }

  ocultar(){
    this.mostrarTodas=false;
    this.opiniones=this.todas.slice(0,5);
  }
  mostrar(){
    this.opiniones=this.todas;
    this.mostrarTodas=true;

  }
}
