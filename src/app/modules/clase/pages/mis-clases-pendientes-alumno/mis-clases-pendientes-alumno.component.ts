import { DIR_DOCUMENT_FACTORY } from '@angular/cdk/bidi/dir-document-token';
import { I } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaseService } from 'src/app/core/services/clase/clase.service';

@Component({
  selector: 'app-mis-clases-pendientes-alumno',
  templateUrl: './mis-clases-pendientes-alumno.component.html',
  styleUrls: ['./mis-clases-pendientes-alumno.component.scss']
})
export class MisClasesPendientesAlumnoComponent implements OnInit {
  clases: any[] = [];
  id: number = Number(localStorage.getItem("idUser"));
  options = [
    {name: 'Todas', code: 'todas'},
    {name: 'Hoy', code: 'hoy'},
  ];
  option:any={name: 'Todas', code: 'todas'};
  todas:any=[]
  constructor(private claseService: ClaseService,private router:Router) {
    this.claseService.obtenerClasesPorAlumno(this.id).subscribe(
      (clases) => {
        clases.forEach(d=>{
          if(d.estado !='FINALIZADO' && d.clase){
            this.clases.push(d)
            this.todas.push(d)
          }
        })
        this.clases.sort(function (a, b) { return new Date(a.fecha).getTime() - new Date(b.fecha).getTime() });
        this.todas.sort(function (a, b) { return new Date(a.fecha).getTime() - new Date(b.fecha).getTime() });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
  }
  verDetalle(id) {
    this.router.navigate(['detalle-clase', { q: id }])
  }
  unirse(id){
    this.router.navigate(['reunion', { q: id }])
  }

  onChange(){
    let hoy=new Date();
    if(this.option.code == 'hoy'){
      this.clases=this.todas.filter(d=>new Date(d.fecha).getDate() == hoy.getDate() && new Date(d.fecha).getFullYear() == hoy.getFullYear() && new Date(d.fecha).getMonth() == hoy.getMonth());
    }
    if(this.option.code == 'todas'){
      this.clases=this.todas
    }
  }
}
