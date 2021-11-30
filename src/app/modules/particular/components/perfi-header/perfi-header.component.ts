import { Component, OnInit } from "@angular/core";
import { ParticularService } from "src/app/core/services/particular/particular.service";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Particular } from "src/app/shared/models/particular";
import { Usuario } from "src/app/shared/models/usuario";
import { Documento } from "src/app/shared/models/documento";

@Component({
  selector: "app-perfi-header",
  templateUrl: "./perfi-header.component.html",
  styleUrls: ["./perfi-header.component.scss"],
})
export class PerfiHeaderComponent implements OnInit {
  particular: Particular;
  id: number = Number(localStorage.getItem("idUser"));
  id_profesor: number;
  fotoPerfil:Documento[];
  formDatos = this.form.group({
    localidad: [""],
    experiencia: [""],
  });

  constructor(
    private snackBar: MatSnackBar,
    private form: FormBuilder,
    private router: Router,
    private particularService: ParticularService
  ) {}

  ngOnInit(): void {
    this.particularService.buscarPorIdProfesor(this.id).subscribe(
      (particular) => {
        this.particular = particular;
        this.formDatos.controls["localidad"].setValue(
          this.particular.localidad
        );
        this.formDatos.controls["experiencia"].setValue(
          this.particular.experiencia
        );
        this.particularService.obtenerFotoPerfilPorUsuario(this.id).subscribe(
          (archivos) => (this.fotoPerfil = archivos),
          (error) => console.error(error)
        );
        console.error(this.id);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  confirmar() {
    if (this.formDatos.valid) {
      let particular: Particular;
      let user: Usuario;
      this.id_profesor = this.particular.id;

      particular = {
        id: this.particular.id,
        video: null,
        localidad: this.formDatos.controls["localidad"].value,
        experiencia: this.formDatos.controls["experiencia"].value,
        usuario: null,
      };

      this.particularService.editarPerfil(particular).subscribe(
        () => {
          this.snackBar.open("El perfil fue editado correctamente", "", {
            duration: 1500,
            horizontalPosition: "end",
            verticalPosition: "top",
            panelClass: ["green-snackbar"],
          });
        },
        (error) => {
          //!= 200
          this.formDatos.markAllAsTouched();
          this.snackBar.open(
            "Error al editar el perfil, usted no esta autorizado para modificar este perfil.",
            "",
            {
              duration: 1500,
              horizontalPosition: "end",
              verticalPosition: "top",
            }
          );
          console.error(particular, error);
        }
      );
    } else {
      this.formDatos.markAllAsTouched();
      this.snackBar.open(
        "Error al editar perfil, ingrese los campos correctamente.",
        "",
        {
          duration: 1500,
          horizontalPosition: "end",
          verticalPosition: "top",
        }
      );
      console.log("Error");
      this.formDatos.markAllAsTouched();
    }
  }

  obtenerImagenEnBase64(documento: Documento): string {
    return `data:${documento.extension};base64,${documento.datos}`;
  }
}
