import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaseService } from 'src/app/core/services/clase/clase.service';


@Component({
  selector: 'app-ver-mis-clases-particular',
  templateUrl: './ver-mis-clases-particular.component.html',
  styleUrls: ['./ver-mis-clases-particular.component.scss']
})
export class VerMisClasesParticularComponent implements OnInit {
  id: number;
  clases:any[];

  orden=[{name:'Mas recientes',code:'1'},{name:'Mas antiguos',code:'2'}]
  filtro=[{name:'Disponible',code:'1'},{name:'No disponible',code:'2'}]
  

  sortOrder: number;
  sortKey='id';
  sortField: string;
  selectedEstado:string;

  constructor(private router: Router, private claseService: ClaseService,private route: ActivatedRoute, public snackBar: MatSnackBar) { 
    this.route
      .params
      .subscribe(params => {
        this.id = params.q
      });
  }

  ngOnInit(): void {
    this.claseService.obtenerClasesPorParticular(1)
    .subscribe(
      (res) => {
        this.clases=res
        console.log(this.clases)
      },
      (error) => console.error(error)
    );
  }
  irEditar(id) {
    this.router.navigate(['editar-detalle-clase-particular', { q: id }])
  }
  verDetalle(id) {
    this.router.navigate(['detalle-clase-particular', { q: id }])
  }
  eliminar(id){
    this.claseService.eliminarClase(id)
    .subscribe(
      () => {
        this.snackBar.open('La clase fue eliminada correctamente', "", {
          duration: 2000,
          horizontalPosition: "end",
          verticalPosition: "top",
          panelClass: ['green-snackbar']
        });
      },
      (error) => console.error(error)
    );
  }



  
}