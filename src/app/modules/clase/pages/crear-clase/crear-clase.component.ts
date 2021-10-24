import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClaseService } from 'src/app/core/services/clase/clase.service';
import { Clase } from 'src/app/shared/models/clase';
import { Nivel } from 'src/app/shared/models/nivel';
import { Materia } from 'src/app/shared/models/materia';



@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.scss']
})
export class CrearClaseComponent implements OnInit {

  _materias: Materia[] = [];
  _niveles: Nivel[] = [];
  filteredMateria: any[] = [];
  formDatos: FormGroup;


  constructor(private form: FormBuilder, private router: Router, private claseService: ClaseService,public snackBar: MatSnackBar ) {}

  ngOnInit(): void {
    this.formDatos = this.form.group({
      nombre: ['', Validators.required],
      materia: ['', Validators.required],
      nivel: ['', Validators.required],
      modo: ['', Validators.required],
      tipo: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
    });

    this.claseService.obtenerMaterias()
    .subscribe(
      (materias) => {
        this._materias = materias;
      }, 
      (error) => {
        console.log("Error obeteniendo las materias", error);
      });

    this.claseService.obtenerNiveles()
    .subscribe(
      (niveles) => {
        this._niveles = niveles;
      },
      (error) => {
        console.log("Error obteniendo los niveles", error);
      });
}


registrarClase(){
  if(this.formDatos.valid) {
    let clase: Clase;

    clase = {
      nombre: this.formDatos.controls["nombre"].value,
      materia: this.formDatos.controls["materia"].value,
      nivel: this.formDatos.controls["nivel"].value,
      modo: this.formDatos.controls["modo"].value,
      tipo: this.formDatos.controls["tipo"].value,
      precio: this.formDatos.controls["precio"].value,
      descripcion: this.formDatos.controls["descripcion"].value
    }

    this.claseService.subirClase(clase)
              .subscribe(
                () => {
                  this.snackBar.open('El modelo fue cargado correctamente', "", {
                    duration: 1500,
                    horizontalPosition: "end",
                    verticalPosition: "top",
                    panelClass: ['green-snackbar']
                  });
                  this.formDatos.reset();
                },
                (error) => {
                  //!= 200
                  console.error("Hubo un error", error);
                });
    } else {
      console.log('Error') 
      this.formDatos.markAllAsTouched();
    }
  }



}
  



