import { Component, OnInit } from '@angular/core';
import { DetalleClase } from 'src/app/shared/models/detalleClase';

@Component({
  selector: 'app-detalle-clase',
  templateUrl: './detalle-clase.component.html',
  styleUrls: ['./detalle-clase.component.scss']
})
export class DetalleClaseComponent implements OnInit {
  registro= new DetalleClase();
  constructor() { 
    this.registro.descripcion = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
    this.registro.foto = 'default-user.png';
    this.registro.materia = 'Ingles';
    this.registro.stars = 4;
    this.registro.type = 'Online';
    this.registro.ubicacion = 'Ituzaingo, Buenos Aires';
    this.registro.nivel = 'Secundario';
    this.registro.particular = 'Romina Perez';
    this.registro.academico='Titulo academico '
    this.registro.precio_por_hora=500.00;
  }

  ngOnInit(): void {
   
  }

}
