import { Component, OnInit } from '@angular/core';
import { DetalleClase } from 'src/app/shared/models/detalleClase';

@Component({
  selector: 'app-detalle-clase-particular',
  templateUrl: './detalle-clase-particular.component.html',
  styleUrls: ['./detalle-clase-particular.component.scss']
})
export class DetalleClaseParticularComponent implements OnInit {
  registro= new DetalleClase();
  alumnos = [
    { nombreCompleto: 'Micaela Cuello', fecha: new Date(),horario:'14:00 PM', estado: 'Pendiente'},
    { nombreCompleto: 'Micaela Cuello', fecha: new Date(),horario:'15:00 PM', estado: 'Pendiente'},
    { nombreCompleto: 'Micaela Cuello', fecha: new Date(),horario:'19:00 PM', estado: 'Finalizada'},
    
  ];
  constructor() { 
    this.registro.descripcion = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
    this.registro.foto = 'default-user.png';
    this.registro.materia = 'Ingles';
    this.registro.stars = 5;
    this.registro.type = 'Online';
    this.registro.ubicacion = 'Moron, Buenos Aires';
    this.registro.nivel = 'Secundario';
    this.registro.particular = 'Romina Perez';
    this.registro.academico='Titulo academico ';
    this.registro.precio_por_hora=500.00;
  }

  ngOnInit(): void {
   
  }

}
