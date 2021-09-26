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
    this.registro.descripcion = 'descripcion 2';
    this.registro.foto = 'default-user.png';
    this.registro.materia = 'Ingles';
    this.registro.stars = 4;
    this.registro.type = 'Online';
    this.registro.ubicacion = 'Ituzaingo, Buenos Aires';
    this.registro.nivel = 'Secundario';
    this.registro.particular = 'particular 2';
    this.registro.academico='Titulo academico '
    this.registro.precio_por_hora=30.00;
  }

  ngOnInit(): void {
   
  }

}
