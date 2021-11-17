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
  alumno: Alumno;
  particular: Particular;
  beneficios: CardModel[];
  clases: Clase[] = [];
  id: number = Number(localStorage.getItem("idUser"));
  id_alumno: number;
  user: any;

  constructor(
    private alumnoService: AlumnnoService,
    private claseService: ClaseService,
    private particularService: ParticularService,
    private form: FormBuilder
  ) {}

  folders: Section[] = [
    {
      name: "Clase 1",
      updated: new Date("1/1/16"),
    },
    {
      name: "Clase 2",
      updated: new Date("1/17/16"),
    },
    {
      name: "Clase 3",
      updated: new Date("1/28/16"),
    },
  ];

  ngOnInit() {
    this.alumnoService.buscarPorId(this.id).subscribe(
      (alumno) => {
        this.alumno = alumno;
        this.claseService.obtenerClasesPorAlumno(alumno.id).subscribe(
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

    this.beneficios = [
      {
        titulo: "Pack 20 clases 10%",
        subtitulo: "Descuentos",
        contenido: "This card has divider and indeterminate progress as footer",
      },
      {
        titulo: "20% de descuento",
        subtitulo: "Descuentos",
        contenido: "Si sos un suscriptor activo de la página durante un año.",
      },
      {
        titulo: "Primer clase GRATIS",
        subtitulo: "Descuentos",
        contenido:
          "Podes probar nuestros servicios gratuitamente la primera vez.",
      },
    ];
  }
}
