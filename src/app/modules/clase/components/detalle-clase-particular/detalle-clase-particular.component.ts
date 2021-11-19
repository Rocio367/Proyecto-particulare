import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClaseService } from 'src/app/core/services/clase/clase.service';
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
  id:number;
  constructor(private aRouter:ActivatedRoute,private claseService:ClaseService) { 
    this.aRouter.params.subscribe(
      (params: Params) => {
        this.id=Number(params.q);
      }
    );
    this.claseService.verDetalle(this.id).subscribe(res => {
      console.log(res)
      this.registro.descripcion = res.descripcion;
      this.registro.titulo = res.nombre;
      this.registro.foto = 'default-user.png';
      this.registro.materia = res.materia;
      this.registro.stars = 5;
      this.registro.type = res.metodo;
      this.registro.ubicacion = 'Moron, Buenos Aires';
      this.registro.nivel = res.nivel;
      this.registro.particular = 'Romina Perez';
      this.registro.academico='Titulo academico ';
      this.registro.precio_por_hora=res.precio;
      this.registro.modo=res.modo;
    })

   
   
  }

  ngOnInit(): void {
   
  }

}
