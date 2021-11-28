import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AlumnnoService } from 'src/app/core/services/alumno/alumnno.service';
import { ReseniaService } from 'src/app/core/services/resenia/resenia.service';
import { Documento } from 'src/app/shared/models/documento';

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

  opiniones:any[]=[];
  todas:any[]=[];
  @Input() id:number;
  mostrarTodas=false;
  constructor(private reseniaService:ReseniaService,private servicesAlumno:AlumnnoService) { 
 
   
  }

  ngOnInit(): void {
    this.reseniaService.obtenerReseniasDelParticular(this.id).subscribe(res => {
      res.forEach(e => {
        this.servicesAlumno.obtenerFotoPerfilPorUsuario(e.usuario.id).subscribe(foto=>{
          e.fotoPerfil=this.obtenerImagenEnBase64(foto[0]);
          this.todas.push(e)
          this.ocultar()
        })

      });
    })
  }

 

  ocultar(){
    this.mostrarTodas=false;
    this.opiniones=this.todas.slice(0,5);
  }
  mostrar(){
    this.opiniones=this.todas;
    this.mostrarTodas=true;

  }

  obtenerImagenEnBase64(documento: Documento): string {
    return `data:${documento.extension};base64,${documento.datos}`;
  }
}
