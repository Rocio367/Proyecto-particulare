import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClaseService } from 'src/app/core/services/clase/clase.service';
import { Clase } from 'src/app/shared/models/clase';
import { Materia } from 'src/app/shared/models/materia';
import { Nivel } from 'src/app/shared/models/nivel';

@Component({
  selector: 'app-editar-clase-particular',
  templateUrl: './editar-clase-particular.component.html',
  styleUrls: ['./editar-clase-particular.component.scss']
})
export class EditarClaseParticularComponent implements OnInit {

  _materias: Materia[] = [];
  _niveles: Nivel[] = [];
  modo = [{ name: 'Individual', value: 'INDIVIDUAL' }, { name: 'Grupal', value: 'GRUPAL' }]
  metodo = [{ name: 'Online', value: 'ONLINE' }, { name: 'Presencial', value: 'PRESENCIAL' }]
  filteredMateria: any[] = [];
  formDatos: FormGroup;
  cupo = false;
  disponibilidad: any;
  id:number;
  constructor(private aRouter:ActivatedRoute,private form: FormBuilder, private router: Router, private claseService: ClaseService, public snackBar: MatSnackBar) {
    this.aRouter.params.subscribe(
      (params: Params) => {
        this.id=Number(params.q);
      }
    );
    this.claseService.verDetalle(this.id).subscribe(res => {
      console.log(res)
      this.formDatos = this.form.group({
        nombre: [res.nombre, Validators.required],
        materia: [res.materia.id, Validators.required],
        nivel: [res.nivel.id, Validators.required],
        modo: [res.modo, Validators.required],
        metodo: [res.metodo, Validators.required],
        precio: [res.precio, [Validators.required, Validators.min(1)]],
        descripcion: [res.descripcion, Validators.required],
        cupo: [res.cupo],
      });

      this.formDatos.get('materia').disable();
      this.formDatos.get('nivel').disable();
      this.formDatos.get('modo').disable();
      this.formDatos.get('metodo').disable();
      this.formDatos.get('precio').disable();
      this.formDatos.get('cupo').disable();

    })

   
  }

  ngOnInit(): void {

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
    console.log(this.disponibilidad)
    this.disponibilidad = event;
  }
  editarClase() {
    if (this.formDatos.valid) {
      if (this.disponibilidad) {
        let clase = {
          nombre : this.formDatos.get("nombre").value,
          descripcion :this.formDatos.get("descripcion").value,
          disponibilidad : this.disponibilidad,
        }

        console.log(clase)

        this.claseService.editarClase(clase,this.id)
          .subscribe(
            () => {
              this.snackBar.open('La clase fue modificada correctamente', "", {
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




