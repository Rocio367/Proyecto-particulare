import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ClaseService } from 'src/app/core/services/clase/clase.service';
import { HorariosParticularComponent } from '../../components/horarios-particular/horarios-particular.component';


@Component({
  selector: 'app-ver-mis-clases-particular',
  templateUrl: './ver-mis-clases-particular.component.html',
  styleUrls: ['./ver-mis-clases-particular.component.scss'],
  providers: [DialogService]

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
  idUser=localStorage.getItem('idUser');
  referenciaDialogoDinamico: DynamicDialogRef;

  constructor(private router: Router,  public dialogService: DialogService,private claseService: ClaseService,private route: ActivatedRoute, public snackBar: MatSnackBar) { 
    this.route
      .params
      .subscribe(params => {
        this.id = params.q
      });
  }

  ngOnInit(): void {
    this.claseService.obtenerClasesPorParticular(Number(this.idUser))
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

  iniciar(id){
    console.log(id)
   this.referenciaDialogoDinamico = this.dialogService.open(HorariosParticularComponent, {
    data: {
      id: id,
    },
    width: '90%',
    height: 'auto',
  });
  }



  
}