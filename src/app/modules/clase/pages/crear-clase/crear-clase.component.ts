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
  modo = [{ name: 'Individual', value: 'INDIVIDUAL' }, { name: 'Grupal', value: 'GRUPAL' }]
  metodo = [{ name: 'Online', value: 'ONLINE' }, { name: 'Presencial', value: 'PRESENCIAL' }]
  filteredMateria: any[] = [];
  formDatos: FormGroup;
  cupo = false;
  disponibilidad: any;
  idUser=localStorage.getItem('idUser');
  constructor(private form: FormBuilder, private router: Router, private claseService: ClaseService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.formDatos = this.form.group({
      nombre: ['', Validators.required],
      materia: ['', Validators.required],
      nivel: ['', Validators.required],
      modo: ['', Validators.required],
      metodo: ['', Validators.required],
      precio: ['',[ Validators.required,Validators.min(1)]],
      descripcion: ['', Validators.required],
      cupo: [''],
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

  addDisponibilidad(event) {
    this.disponibilidad = event;
  }
  registrarClase() {
    if (this.formDatos.valid) {
      if (this.disponibilidad) {
        let clase: Clase;

        clase = {
          nombre: this.formDatos.controls["nombre"].value,
          materia: this.formDatos.controls["materia"].value,
          nivel: this.formDatos.controls["nivel"].value,
          modo: this.formDatos.controls["modo"].value,
          metodo: this.formDatos.controls["metodo"].value,
          precio: this.formDatos.controls["precio"].value,
          descripcion: this.formDatos.controls["descripcion"].value,
          cupo: this.formDatos.controls["cupo"].value,
          disponibilidad: this.disponibilidad,
          id_profesor: Number(this.idUser),
        }
        console.log(clase)

        this.claseService.subirClase(clase)
          .subscribe(
            () => {
              this.snackBar.open('La clase fue cargada correctamente', "", {
                duration: 1500,
                horizontalPosition: "end",
                verticalPosition: "top",
                panelClass: ['green-snackbar']
              });
              this.router.navigate(['ver-clase-particular'])
              this.formDatos.reset();
            },
            (error) => {
              //!= 200
              console.error("Hubo un error", error);
            });

      } else {
        this.snackBar.open('Debe asignar disponibilidad para crear una clase', "", {
          duration: 1500,
          horizontalPosition: "end",
          verticalPosition: "top",
          panelClass: ['red-snackbar']
        });
      }

    } else {
      console.log('Error')
      this.formDatos.markAllAsTouched();
    }
    console.log(this.disponibilidad)


  }
  esGrupal() {
    if ((this.formDatos.get('modo').value) == 'GRUPAL') {
      this.formDatos.controls['cupo'].setValidators([Validators.required, Validators.min(2)]);
      this.formDatos.controls['cupo'].updateValueAndValidity();
      this.cupo = true;

    } else {
      this.formDatos.controls['cupo'].clearValidators();
      this.formDatos.controls['cupo'].updateValueAndValidity();
      this.formDatos.controls['cupo'].setValue(1)

      this.cupo = false;

    }
  }
}




