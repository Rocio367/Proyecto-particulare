import { M } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { Archivo } from 'src/app/shared/models/archivo';
import { imgGallery } from 'src/app/shared/models/imgGallery';

@Component({
  selector: 'app-detalle-modelo-alumno',
  templateUrl: './detalle-modelo-alumno.component.html',
  styleUrls: ['./detalle-modelo-alumno.component.scss']
})
export class DetalleModeloAlumnoComponent implements OnInit {
  gallery: imgGallery[] = [];
  resoluciones: string[] = ['default-placeholder.png'];
  archivo = new Archivo;
  constructor() {
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
  }
  open(n: number) {
    window.open('./assets/img/' + this.gallery[n].path)
  }
  openRes(n: string) {
    window.open('./assets/img/' + n)
  }
  contratar(){
    
  }
}
