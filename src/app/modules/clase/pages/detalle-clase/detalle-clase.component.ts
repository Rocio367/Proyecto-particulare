import { Component, OnInit } from '@angular/core';
import { DetalleClase } from 'src/app/shared/models/detalleClase';
import { Clase } from 'src/app/shared/models/clase';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClaseService } from 'src/app/core/services/clase/clase.service';
import { ParticularService } from 'src/app/core/services/particular/particular.service';
import { ReseniaService } from 'src/app/core/services/resenia/resenia.service';

@Component({
  selector: 'app-detalle-clase',
  templateUrl: './detalle-clase.component.html',
  styleUrls: ['./detalle-clase.component.scss']
})
export class DetalleClaseComponent implements OnInit {
  registro = new DetalleClase();
  clases: Clase;
  valor: number;
  id: number;
  idUser = localStorage.getItem('idUser');
  idParticular: string;
  opiniones: any;

  constructor(private claseService: ClaseService, private reseniaService: ReseniaService, private particularServices: ParticularService, private router: Router, private aRouter: ActivatedRoute,) {
    this.aRouter.params.subscribe(
      (params: Params) => {
        this.id = Number(params.q);
      }
    );
    this.claseService.verDetalle(this.id).subscribe(res => {
      console.log(res)
      this.registro.descripcion = res.descripcion;
      this.registro.titulo = res.nombre;
      this.registro.materia = res.materia;
      this.registro.stars = 5;
      this.registro.type = res.metodo;
      this.registro.nivel = res.nivel;
      this.registro.precio_por_hora = res.precio;
      this.registro.modo = res.modo;
    })

    this.particularServices.buscarPorIdProfesor(Number(this.idUser)).subscribe(res => {
      console.log(res)
      this.idParticular = res.usuario.id;
      this.registro.foto = res.usuario.fotoPerfil;
      this.registro.ubicacion = res.localidad;
      this.registro.particular = res.usuario.nombre + ' ' + res.usuario.apellido;
      // this.registro.academico='Titulo academico ';
      this.registro.experiencia = res.experiencia;
      this.registro.telefono = res.usuario.telefono;
      this.registro.mail = res.usuario.email;
    })

    this.reseniaService.obtenerResenias(this.id).subscribe(res => {
      console.log(res)
      this.opiniones = res;
    })
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
    this.claseService.verDetalle(this.valor).subscribe(
      (clases) => {
        this.clases = clases;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  contactar() {
    this.router.navigate(['nuevo-mensaje', { p: this.idParticular }])
  }
}
