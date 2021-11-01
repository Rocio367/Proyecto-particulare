import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Usuario } from "src/app/shared/models/usuario";
import { UsuariosService } from "src/app/core/services/usuarios/usuarios.service";

@Component({
  selector: "app-registrar-alumno",
  templateUrl: "./registrar-alumno.component.html",
  styleUrls: ["./registrar-alumno.component.scss"],
})
export class RegistrarAlumnoComponent implements OnInit {
  formDatos = this.form.group({
    nombre: ["", Validators.required],
    apellido: ["", Validators.required],
    documento: ["", Validators.required],
    email: ["", [Validators.email, Validators.required]],
    contrasenia: ["", Validators.required],
    repetirContrasenia: ["", Validators.required],
    telefono: ["", Validators.required],
    fechaNacimiento: ["", Validators.required],
    fotoPerfil: [""],
    intereses: [""],
  });

  tiposDeArchivosPermitidos = ".png, .jpg, .jpeg";
  imagenPerfil = "";
  imagenDefault = "../../../../../assets/img/default-user.png";

  constructor(
    private form: FormBuilder,
    private usuariosService: UsuariosService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.formDatos.controls["fotoPerfil"].valueChanges.subscribe((archivo) => {
      const reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = () => {
        this.imagenPerfil = reader.result as string;
      };
    });
  }

  registrarAlumno() {
    if (this.formDatos.valid) {
      let alumno: Usuario;

      alumno = {
        nombre: this.formDatos.controls["nombre"].value,
        apellido: this.formDatos.controls["apellido"].value,
        documento: this.formDatos.controls["documento"].value,
        email: this.formDatos.controls["email"].value,
        contrasenia: this.formDatos.controls["contrasenia"].value,
        telefono: this.formDatos.controls["telefono"].value,
        fechaNacimiento: this.formDatos.controls["fechaNacimiento"].value,
        fotoPerfil: this.imagenPerfil
      };

      this.usuariosService.registrarAlumno(alumno).subscribe(
        () => {
          this._snackBar.open('Perfil creado correctamente', "", {
            duration: 3000,
            horizontalPosition: "end",
            verticalPosition: "top",
            panelClass: ["green-snackbar"],
          });
          this.router.navigate(["/perfil-alumno"]);
          return true;
        },
        (error) => {
          //!= 200
          console.error("Hubo un error", error);
        }
      );
    } else {
      console.log(this.formDatos);
      this.formDatos.markAllAsTouched();
    }
  }

  fotoDePerfilCargada(): boolean {
    return this.imagenPerfil && this.imagenPerfil !== "";
  }

  obtenerRangoDeEdad(): string {
    var fechaActual = new Date().getFullYear();
    var fechaLimiteMaxima = fechaActual - 18;
    var fechaLimiteMinima = fechaActual - 80;
    return fechaLimiteMinima + ":" + fechaLimiteMaxima;
  }
}
