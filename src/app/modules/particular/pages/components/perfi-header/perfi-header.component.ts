import { Component, OnInit } from '@angular/core';
import { ParticularService } from 'src/app/core/services/particular/particular.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Particular } from 'src/app/shared/models/particular';
import { Usuario } from 'src/app/shared/models/usuario';


@Component({
  selector: 'app-perfi-header',
  templateUrl: './perfi-header.component.html',
  styleUrls: ['./perfi-header.component.scss']
})
export class PerfiHeaderComponent implements OnInit {

  formDatos = this.form.group({
    video: [''],
    localidad: [''],
    experiencia: [''],
  });

  video = "";
  constructor(private snackBar:MatSnackBar, private form: FormBuilder, private router: Router,
    private particularService: ParticularService) { }

    ngOnInit(): void {
      this.formDatos.controls['video'].valueChanges.subscribe(
        archivo => {
          const reader = new FileReader();
          reader.readAsDataURL(archivo)
          reader.onload = () => {
            this.video = reader.result as string;
            }
          }
        );      
      }


  confirmar(){
    if(this.formDatos.valid) {
      let particular: Particular;
      let user : Usuario;

      particular = {
        id:1, /* HARDCODEADO HAY QUE CAMBIARLO */
        video: this.video,
        localidad: this.formDatos.controls["localidad"].value,
        experiencia: this.formDatos.controls["experiencia"].value,
        usuario: null
      }

      this.particularService.editarPerfil(particular)
      .subscribe(
        () => {
          this.snackBar.open('El perfil fue editado correctamente', "", {
            duration: 1500,
            horizontalPosition: "end",
            verticalPosition: "top",
            panelClass: ['green-snackbar']
          });
          this.formDatos.reset();
        },
        (error) => {
          //!= 200
          this.formDatos.markAllAsTouched();
          this.snackBar.open('Error al editar el perfil, ingrese los campos correctamente.', "", {
            duration: 1500,
            horizontalPosition: "end",
            verticalPosition: "top",
          });
          console.error(particular, error);
        });
        } else {
          this.formDatos.markAllAsTouched();
          this.snackBar.open('Error al editar perfil, ingrese los campos correctamente.', "", {
            duration: 1500,
            horizontalPosition: "end",
            verticalPosition: "top",
          });
        console.log('Error') 
        this.formDatos.markAllAsTouched();
        
        }
  }


}
