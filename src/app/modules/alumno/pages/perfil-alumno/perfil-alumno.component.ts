import { Component, OnInit } from "@angular/core";
import { AlumnnoService } from "src/app/core/services/alumno/alumnno.service";
import { CardModel } from "src/app/shared/models/card";
import { Clase } from "src/app/shared/models/clase";
import { Usuario } from "src/app/shared/models/usuario";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ClaseService } from "src/app/core/services/clase/clase.service";
import { Particular } from "./../../../../shared/models/particular";
import { ParticularService } from "src/app/core/services/particular/particular.service";
import { Alumno } from "src/app/shared/models/alumno";
import { Router } from "@angular/router";
import { Documento } from "src/app/shared/models/documento";

export interface Section {
  name: string;
  updated: Date;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: "app-perfil-alumno",
  templateUrl: "./perfil-alumno.component.html",
  styleUrls: ["./perfil-alumno.component.scss"],
})
export class PerfilAlumnoComponent implements OnInit {
  alumno: any;
  particular: Particular;
  beneficios: CardModel[];
  clases: Clase[] = [];
  id: number = Number(localStorage.getItem("idUser"));

  constructor(
    private router: Router,
    private alumnoService: AlumnnoService,
    private claseService: ClaseService,
    private particularService: ParticularService,
    private form: FormBuilder
  ) {}

  ngOnInit(): void {

    this.alumnoService.buscarPorId(this.id)
    .subscribe(
      (alumno) => {
      this.alumno = alumno;
      this.alumnoService.obtenerFotoPerfilPorUsuario(this.id)
          .subscribe(
            (archivos) => this.alumno.usuario.fotoPerfil = archivos,
            (error) => console.error(error)
          )
      },
      (error) => console.error(error)
    );

   // console.log("Soy una foto" + this.alumnoService.obtenerFotoPerfilPorUsuario(this.id))

  }


  obtenerImagenEnBase64(documento: Documento): string {
    return `data:${documento.extension};base64,${documento.datos}`;
  }

  iniciar() {
    this.router.navigate(["reunion", { q: 222 }]);
  }
}
