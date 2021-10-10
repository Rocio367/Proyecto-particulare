import { M } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Archivo } from 'src/app/shared/models/archivo';
import { imgGallery } from 'src/app/shared/models/imgGallery';
import { ModalContratarModelosComponent } from '../../components/modal-contratar-modelos/modal-contratar-modelos.component';
import { ModalValorarComponent } from '../../components/modal-valorar/modal-valorar.component';

@Component({
  selector: 'app-detalle-modelo-alumno',
  templateUrl: './detalle-modelo-alumno.component.html',
  styleUrls: ['./detalle-modelo-alumno.component.scss']
})
export class DetalleModeloAlumnoComponent implements OnInit {
  gallery: imgGallery[] = [];
  resoluciones: any[] = [{ doc: 'default-placeholder.png', particular: 'particular 2', valoracion: null },
  { doc: 'default-placeholder.png', particular: 'particular 1', valoracion: 5 }];
  archivo = new Archivo;
  id: number;

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {
    this.route
      .params
      .subscribe(params => {
        this.id = params.q
      });

    this.archivo.archivos = ['https://www.eltiempo.com/files/article_content/files/crop/uploads/2021/02/22/6033a0a88d9ae.r_1614037672834.0-886-1536-2038.jpeg',
      'https://www.eltiempo.com/files/article_content/files/crop/uploads/2021/02/22/6033a0a88d9ae.r_1614037672834.0-886-1536-2038.jpeg',
    'https://www.eltiempo.com/files/article_content/files/crop/uploads/2021/02/22/6033a0a88d9ae.r_1614037672834.0-886-1536-2038.jpeg']
    this.archivo.nombre = 'nombre '
    this.archivo.carrera = 'carrera '
    this.archivo.institucion = 'institucion '
    this.archivo.materia = 'materia '
    this.archivo.nivel = 'nivel '
    this.archivo.fecha = new Date;
    this.archivo.seguidores = 4;
    this.archivo.profesores = [
      { particular: 'particular 1', foto: 'default-user.png', valoracion: 5, costo_explicacion: 100, costo: 100, demora: '1 dia' },
      { particular: 'particular 2', foto: 'default-user.png', valoracion: 4, costo_explicacion: 100, costo: 200, demora: '1 dia' },
      { particular: 'particular 3', foto: 'default-user.png', valoracion: 5, costo_explicacion: 100, costo: 150, demora: '1 dia' }]
    this.archivo.estado = 'Podes solicitarlo'

   
  }

  ngOnInit(): void {
    if (this.id == 1) {
      this.archivo.estado = 'solicitar';
    } else
      if (this.id == 2) {
        this.archivo.estado = 'pendiente';
      } else
        if (this.id == 3) {
          this.archivo.estado = 'resuelto';
        }
  }
  open(n: string) {
    window.open(n)
  }
  openRes(n: string) {
    window.open('./assets/img/' + n)
  }
  contratar() {
    this.dialog.open(ModalContratarModelosComponent, { panelClass: 'custom-dialog-container' });
  }

  valorar() {
    this.dialog.open(ModalValorarComponent, { panelClass: 'custom-dialog-container' });

  }
}
