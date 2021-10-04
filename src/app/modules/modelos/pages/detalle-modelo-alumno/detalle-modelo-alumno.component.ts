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
  resoluciones: any[] = [{doc:'default-placeholder.png', particular: 'particular 2',valoracion:null},
    {doc:'default-placeholder.png', particular: 'particular 1',valoracion:5}];
  archivo = new Archivo;
  id:number ;

  constructor(private router: ActivatedRoute ,private dialog: MatDialog) {
    this.id=this.router.snapshot.params['id'];
    this.archivo.archivos = ['default-placeholder.png']
    this.archivo.nombre = 'nombre '
    this.archivo.carrera = 'carrera '
    this.archivo.institucion = 'institucion '
    this.archivo.materia = 'materia '
    this.archivo.nivel = 'nivel '
    this.archivo.fecha = new Date;
    this.archivo.seguidores = 4;
    this.archivo.profesores = [
      { particular: 'particular 1',foto:'default-user.png' ,valoracion:5,costo_explicacion:100, costo: 100, demora: '1 dia' },
      { particular: 'particular 2',foto:'default-user.png', valoracion:4,costo_explicacion:100,costo: 200, demora: '1 dia' },
      { particular: 'particular 3',foto:'default-user.png',valoracion:5, costo_explicacion:100, costo: 150, demora: '1 dia' }]
    this.archivo.estado = 'Podes solicitarlo'

    var i = 0;

    let img = new imgGallery();
    img.id = i.toString();
    img.path = 'default-placeholder.png';
    img.position = i;
    i++;
    this.gallery.push(img)

    let img2 = new imgGallery();
    img2.id = i.toString();
    img2.path = 'default-placeholder.png';
    img2.position = i;
    i++;
    this.gallery.push(img2)

    let img3 = new imgGallery();
    img3.id = i.toString();
    img3.path = 'default-placeholder.png';
    img3.position = i;
    i++;
    this.gallery.push(img3)

    let img4 = new imgGallery();
    img4.id = i.toString();
    img4.path = 'default-placeholder.png';
    img4.position = i;
    i++;
    this.gallery.push(img4)
  }

  ngOnInit(): void {
    if(this.id==1 ){
      this.archivo.estado='solicitar';
    }else 
    if(this.id==2 ){
      this.archivo.estado='pendiente';
    } else 
    if(this.id==3 ){
      this.archivo.estado='resuelto';
    }
  }
  open(n: number) {
    window.open('./assets/img/' + this.gallery[n].path)
  }
  openRes(n: string) {
    window.open('./assets/img/' + n)
  }
  contratar(){
    this.dialog.open(ModalContratarModelosComponent, { panelClass: 'custom-dialog-container'});
  }

  valorar(){
    this.dialog.open(ModalValorarComponent, { panelClass: 'custom-dialog-container'});

  }
}
