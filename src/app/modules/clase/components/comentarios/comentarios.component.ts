import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AlumnnoService } from 'src/app/core/services/alumno/alumnno.service';
import { ReseniaService } from 'src/app/core/services/resenia/resenia.service';
import { Documento } from 'src/app/shared/models/documento';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {
  id: number;
  opiniones:any[]=[];
  todas:any[]=[];
  mostrarTodas=false;
  constructor(private reseniaService:ReseniaService,private aRouter: ActivatedRoute,private servicesAlumno:AlumnnoService) { 
    this.aRouter.params.subscribe(
      (params: Params) => {
        this.id = Number(params.q);
      }
    );
    this.reseniaService.obtenerResenias(this.id).subscribe(res => {
      res.forEach(e => {
        this.servicesAlumno.obtenerFotoPerfilPorUsuario(e.usuario.id).subscribe(foto=>{
          e.fotoPerfil=this.obtenerImagenEnBase64(foto[0]);
          this.todas.push(e)
          this.ocultar()
        })

      });
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

  obtenerImagenEnBase64(documento: Documento): string {
    return `data:${documento.extension};base64,${documento.datos}`;
  }
}
