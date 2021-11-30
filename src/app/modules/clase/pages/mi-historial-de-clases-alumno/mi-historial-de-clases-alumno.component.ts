import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ClaseService } from 'src/app/core/services/clase/clase.service';
import { ReseniaService } from 'src/app/core/services/resenia/resenia.service';
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

  constructor(public dialogService: DialogService, private valoracionServices: ReseniaService, private claseService: ClaseService, private router: Router) {
   this.cargar();

  }

  ngOnInit(): void {
  }
  verDetalle(id) {
    this.router.navigate(['detalle-clase', { q: id }])
  }

  valorar(id) {
    this.referenciaDialogoDinamico = this.dialogService.open(ModalValorarComponent, {
      data: {
        id: id,
      },
      width: '70%',
    });
  }
   cargar(){
    this.claseService.obtenerClasesPorAlumno(this.id).subscribe(
      (clases) => {
        this.valoracionServices.obtenerIdUser(this.id).subscribe(resenias => {

          clases.forEach(c => {
            let resenia = resenias.find(d => d.producto.id == c.id)
            if (c.clase && c.estado == 'FINALIZADA') {
             
                if (resenia) {
                c.valoracion = resenia.puntaje;
                this.clases.push(c)
              }else{
                c.puedeValorar = true;
                this.clases.push(c)
              }
            

            }
          });

        },
          (error) => {
            console.error(error);
          }
        );
      })
   }
}
