import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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

  constructor(private claseService: ClaseService,private router:Router) {
    this.claseService.obtenerClasesPorAlumno(this.id).subscribe(
      (clases) => {
        clases.forEach(d=>{
          if(d.estado !='FINALIZADO'){
             this.clases.push(d)
          }
        })
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
}
