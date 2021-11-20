import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaseService } from 'src/app/core/services/clase/clase.service';

@Component({
  selector: 'app-mi-historial-de-clases-alumno',
  templateUrl: './mi-historial-de-clases-alumno.component.html',
  styleUrls: ['./mi-historial-de-clases-alumno.component.scss']
})
export class MiHistorialDeClasesAlumnoComponent implements OnInit {
  clases: any[] = [];
  id: number = Number(localStorage.getItem("idUser"));

  constructor(private claseService: ClaseService,private router:Router) {
    this.claseService.obtenerClasesPorAlumno(this.id).subscribe(
      (clases) => {
        console.log(this.id, clases)
        this.clases = clases;
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

}
