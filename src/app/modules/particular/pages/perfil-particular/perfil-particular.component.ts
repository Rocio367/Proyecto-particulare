import { DatosAcademicos } from './../../../../shared/models/datosAcademicos';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, PatternValidator } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Clase } from 'src/app/shared/models/clase';
import { DatosAcademicosService } from 'src/app/core/services/datosAcademicos/datosAcademicos.service';
import { ClaseService } from 'src/app/core/services/clase/clase.service';
import { Particular } from './../../../../shared/models/particular';
import { ParticularService } from 'src/app/core/services/particular/particular.service';
import { Documento } from 'src/app/shared/models/documento';


@Component({
  selector: 'app-perfil-particular',
  templateUrl: './perfil-particular.component.html',
  styleUrls: ['./perfil-particular.component.scss']
})
export class PerfilParticularComponent implements OnInit {
  particular: Particular;
  id: number;
  idParticularUser: number;
  datosAcademicos: DatosAcademicos[] = [];
  clases: Clase[] = [];
  open = false;
  openTipo = '';
  formDatos = this.form.group({
    titulo: ['', [Validators.required]],
    desde: ['', [Validators.required]],
    hasta: ['', [Validators.required]],
    documento: [''],

  });
  documento = "";
  fotoPerfil: Documento[];

  constructor(private aRouter: ActivatedRoute, private router: Router, private form: FormBuilder, public snackBar: MatSnackBar,
    private datosAcademicosService: DatosAcademicosService, private claseService: ClaseService,
    private particularService: ParticularService) {
    this.aRouter.params.subscribe(
      (params: Params) => {
        if (params.q) {
          this.id = Number(params.q);
          this.particularService.buscarPorIdProfesor(this.id).subscribe(
            (particular) => {
              this.particular = particular;
              this.idParticularUser = particular.id;
              this.particularService.obtenerFotoPerfilPorUsuario(this.id).subscribe(
                (archivos) => (this.fotoPerfil = archivos),
                (error) => console.error(error)
              );
              this.datosAcademicosService.buscarPorIdProfesor(particular.usuario.id).subscribe(
                (datosAcademicos) => {
                  this.datosAcademicos = datosAcademicos;
                  console.error(particular.id);
                },
                (error) => {
                  console.error(error);
                }
              );

              this.claseService.obtenerClasesPorParticular(particular.usuario.id).subscribe(
                (clases) => {
                  this.clases = clases;
                },
                (error) => {
                  console.error(error);
                }
              );

            },
            (error) => {
              console.error(error);
            }
          );
        }
      }
    );
  }
  ngOnInit(): void {




  }




  obtenerImagenEnBase64(documento: Documento): string {
    return `data:${documento.extension};base64,${documento.datos}`;
  }


  oponDoc(doc) {
    window.open(doc)

  }


  verDetalle(l: any) {
    let id = l.id;
    this.router.navigate(['detalle-clase', { q: id }])
  }

  obtenerRangoDeEdad(): string {
    var fechaActual = new Date().getFullYear();
    var fechaLimiteMaxima = fechaActual;
    var fechaLimiteMinima = fechaActual - 50;
    return fechaLimiteMinima + ":" + fechaLimiteMaxima;
  }

}
