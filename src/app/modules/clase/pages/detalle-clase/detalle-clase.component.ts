import { Component, OnInit } from '@angular/core';
import { DetalleClase } from 'src/app/shared/models/detalleClase';
import { Clase } from 'src/app/shared/models/clase';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClaseService } from 'src/app/core/services/clase/clase.service';
import { ParticularService } from 'src/app/core/services/particular/particular.service';
import { ReseniaService } from 'src/app/core/services/resenia/resenia.service';
import { Particular } from "src/app/shared/models/particular";
import { Documento } from "src/app/shared/models/documento";

@Component({
  selector: 'app-detalle-clase',
  templateUrl: './detalle-clase.component.html',
  styleUrls: ['./detalle-clase.component.scss']
})
export class DetalleClaseComponent implements OnInit {

  particular: Particular;
  registro = new DetalleClase();
  clases: Clase;
  valor: number;
  id: number;
  idUser: number = Number(localStorage.getItem("idUser"));
  idParticular: Number;
  idParticularUsuario: number;
  opiniones: any;
  doc: Documento;
  fotoPerfil: string;
  constructor(private claseService: ClaseService, private particularServices: ParticularService, private router: Router, private aRouter: ActivatedRoute,) {
    this.aRouter.params.subscribe(
      (params: Params) => {
        this.id = Number(params.q);
      }
    );
    this.claseService.verDetalle(this.id).subscribe(res => {
      this.clases = res;
      console.log(res)
      this.idParticular = res.profesor.id;
      this.idParticularUsuario = res.profesor.usuario.id;
      this.registro.descripcion = res.descripcion;
      this.registro.titulo = res.nombre;
      this.registro.materia = res.materia;
      this.registro.stars = Number(res.puntuacion);
      this.registro.type = res.metodo;
      this.registro.nivel = res.nivel;
      this.registro.precio_por_hora = res.precio;
      this.registro.modo = res.modo;
      this.idParticular = res.profesor.id;
      this.particularServices.buscarPorIdProfesor(Number(this.idParticular))
        .subscribe(res2 => {
          this.registro.foto = res2.usuario.fotoPerfil;
          this.registro.ubicacion = res2.localidad;
          this.registro.particular = res2.usuario.nombre + ' ' + res.usuario.apellido;
          this.registro.experiencia = res2.experiencia;
          this.registro.telefono = res2.usuario.telefono;
          this.registro.mail = res2.usuario.email;
        })
      this.particularServices.obtenerFotoPerfilPorUsuario(Number(this.idParticular)).subscribe(res => {
        this.doc = res[0];
        this.fotoPerfil = this.obtenerImagenEnBase64(this.doc);

      })
    })




  }

  ngOnInit(): void {


  }

  obtenerImagenEnBase64(documento: Documento): string {
    return `data:${documento.extension};base64,${documento.datos}`;
  }


  contactar() {
    this.router.navigate(['nuevo-mensaje', { p: this.idParticularUsuario }])
  }
}
