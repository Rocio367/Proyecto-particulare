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
  resoluciones: any[] = [{ nombre:'DocResolucion',doc: 'https://2.bp.blogspot.com/-9jVR3GjWcn8/UZxBIaDMe7I/AAAAAAAAFuk/62w7V-Xo6Jg/s1600/GEOMETRIA+PLANA+Y+DEL+ESPACIO+PROBLEMAS+RESUELTOS+TIPO+EXAMEN+DE+ADMISION+UNI+(4).gif', particular: 'Ezequiel Castillo', valoracion: null },
  { nombre:'DocResolucion2',doc: 'https://i.pinimg.com/736x/3b/12/27/3b12275ad674bbfcccde1c71b582c576.jpg', particular: 'Camila Centurion', valoracion: 5 }];
  archivo = new Archivo;
  id: number;

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {
    this.route
      .params
      .subscribe(params => {
        this.id = params.q
      });

    this.archivo.archivos = ['https://www.altillo.com/examenes/uba/farmaciaybioquim/fisicoquimica/fisicoquimica2001final/fisico.gif']
    this.archivo.nombre = '1° Examen de Fisicoquímica '
    this.archivo.carrera = 'Ciencias Biologicas '
    this.archivo.institucion = 'UBA '
    this.archivo.materia = 'Fisicoquímica '
    this.archivo.nivel = 'Universitario '
    this.archivo.fecha = new Date;
    this.archivo.seguidores = 40;
    this.archivo.profesores = [
      { particular: 'Ezequiel Castillo', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYTVaR_IMpvFxeYNMtYgyEMZX0ITAWOuzM_w&usqp=CAU', valoracion: 5, costo_explicacion: 100, costo: 100, demora: '1 dia' },
      { particular: 'Teresa Cuello', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR90JPbRmExXI8DZMz-wrFFCTV37A9iLSsMnQ&usqp=CAU', valoracion: 4, costo_explicacion: 100, costo: 200, demora: '1 dia' },
      { particular: 'Mirta Perez', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfcXpXZEwtTtygwQJwKZcEAtoO1Th3xtizw&usqp=CAU', valoracion: 5, costo_explicacion: 100, costo: 150, demora: '1 dia' }]
    this.archivo.estado = 'Podes solicitarlo'


  }

  ngOnInit(): void {
    if (this.id == 1) {
      this.archivo.estado = 'Solicitar';
    } else
      if (this.id == 2) {
        this.archivo.estado = 'Pendiente';
      } else
        if (this.id == 3) {
          this.archivo.estado = 'Resuelto';
        }
  }
  open(n: string) {
    window.open(n)
  }
  openRes(n: string) {
    window.open( n)
  }
  contratar() {
    this.dialog.open(ModalContratarModelosComponent, { panelClass: 'custom-dialog-container' });
  }

  valorar() {
    this.dialog.open(ModalValorarComponent, { panelClass: 'custom-dialog-container' });

  }
}
