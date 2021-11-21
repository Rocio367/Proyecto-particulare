import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ClaseService } from 'src/app/core/services/clase/clase.service';
import { ModalValorarComponent } from 'src/app/modules/modelos/components/modal-valorar/modal-valorar.component';

@Component({
  selector: 'app-mi-historial-de-clases-alumno',
  templateUrl: './mi-historial-de-clases-alumno.component.html',
  styleUrls: ['./mi-historial-de-clases-alumno.component.scss'],
  providers: [DialogService]

})
export class MiHistorialDeClasesAlumnoComponent implements OnInit {
  clases: any[] = [];
  id: number = Number(localStorage.getItem("idUser"));
  referenciaDialogoDinamico: DynamicDialogRef;

  constructor(public dialogService: DialogService,private claseService: ClaseService,private router:Router) {
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

  valorar(id){
    this.referenciaDialogoDinamico = this.dialogService.open(ModalValorarComponent, {
      data: {
        id: id,
      },
      width: '70%',
    });
    }

}
