import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { ModelosService } from "src/app/core/services/modelos/modelos.service";
import { OfertaDeResolucion } from "src/app/shared/models/oferta-de-resolucion";
import { TipoDeDemora } from "src/app/shared/models/tipo-de-demora";
import { TipoDeResolucion } from "src/app/shared/models/tipo-de-resolucion";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-modal-postulacion-modelos",
  templateUrl: "./modal-postulacion-modelos.component.html",
  styleUrls: ["./modal-postulacion-modelos.component.scss"],
})
export class ModalPostulacionModelosComponent implements OnInit {
  tiposResolucion: TipoDeResolucion[];
  tiposDeDemoras: TipoDeDemora[];

  formularioDePostulacion: FormGroup;

  idModelo: Number;
  idUsuario: Number;
  disponibilidad: any[] = [];


  constructor(
    private dialogRef: DynamicDialogRef,
    private form: FormBuilder,
    private router: Router,
    private servicioDeModelo: ModelosService,
    private config: DynamicDialogConfig,
    public snackBar: MatSnackBar
  ) {
    this.formularioDePostulacion = this.form.group({
      tipoDeResolucion: ["", Validators.required],
      tipoDeDemora: ["", Validators.required],
      costo: ["", Validators.required],
    });
    this.idModelo = this.config.data.idModelo;
  }

  ngOnInit(): void {
    this.servicioDeModelo
      .obtenerTiposDeResolucion()
      .subscribe((tiposDeResolicion) => {
        this.tiposResolucion = tiposDeResolicion;
      });
    this.servicioDeModelo.obtenerTiposDeDemora().subscribe((tiposDeDemoras) => {
      this.tiposDeDemoras = tiposDeDemoras;
    });
    this.idUsuario = Number(localStorage.getItem("idUser"));
  }
  addDisponibilidad(event) {
    this.disponibilidad = event;
  }
  confirmar() {

    if ((this.disponibilidad && this.disponibilidad.length > 0 && this.formularioDePostulacion.get('tipoDeResolucion').value == 2) || this.formularioDePostulacion.get('tipoDeResolucion').value == 1) {
      if (this.formularioDePostulacion.valid) {
        let ofertaDeResolucion: OfertaDeResolucion = {
          tipoResolucion: this.formularioDePostulacion.controls["tipoDeResolucion"].value,
          tipoDeDemora:this.formularioDePostulacion.controls["tipoDeDemora"].value,
          costo: this.formularioDePostulacion.controls["costo"].value,
          idUsuario: this.idUsuario,
          disponibilidad: this.disponibilidad,

        };
        this.servicioDeModelo
          .ofertarResolucion(ofertaDeResolucion, this.idModelo)
          .subscribe(
            () => {
              this.snackBar.open("Te postulaste con éxito", "", {
                duration: 2000,
                horizontalPosition: "end",
                verticalPosition: "top",
                panelClass: ["green-snackbar"],
              });
              this.dialogRef.close()
            },
            (error) => console.error(error)
          );
      } else {
        this.formularioDePostulacion.markAllAsTouched();
      }
    } else {
      this.snackBar.open('Debe asignar disponibilidad ', "", {
        duration: 1500,
        horizontalPosition: "end",
        verticalPosition: "top",
        panelClass: ['red-snackbar']
      });
    }
  }
}
