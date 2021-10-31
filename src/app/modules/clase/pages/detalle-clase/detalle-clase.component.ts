import { Component, OnInit } from '@angular/core';
import { DetalleClase } from 'src/app/shared/models/detalleClase';
import { Clase } from 'src/app/shared/models/clase';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClaseService } from 'src/app/core/services/clase/clase.service';

@Component({
  selector: 'app-detalle-clase',
  templateUrl: './detalle-clase.component.html',
  styleUrls: ['./detalle-clase.component.scss']
})
export class DetalleClaseComponent implements OnInit {
  registro= new DetalleClase();
  clases: Clase;
  valor: number;


  constructor(private serviceClase: ClaseService,private router:Router,private aRouter: ActivatedRoute,) { 
    this.registro.descripcion = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
    this.registro.foto = 'default-user.png';
    this.registro.materia = 'Ingles';
    this.registro.stars = 5;
    this.registro.type = 'Online';
    this.registro.ubicacion = 'Morón, Buenos Aires';
    this.registro.nivel = 'Secundario';
    this.registro.particular = 'Romina Perez';
    this.registro.academico='Título académico ';
    this.registro.precio_por_hora=500.00;
  }

  ngOnInit(): void {
    this.aRouter.params.subscribe(
      (params: Params) => {
        this.valor = params.q;
        this.buscar(1)
      }
    );
  }


  buscar(page) {
    this.serviceClase.verDetalle(this.valor).subscribe( 
      (clases) => {
        this.clases = clases;
    },
    (error) => {
      console.error(error);
    }
    );
   }

}
