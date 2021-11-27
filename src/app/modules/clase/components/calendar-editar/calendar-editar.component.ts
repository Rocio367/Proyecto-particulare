import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ClaseService } from 'src/app/core/services/clase/clase.service';

@Component({
  selector: 'app-calendar-editar',
  templateUrl: './calendar-editar.component.html',
  styleUrls: ['./calendar-editar.component.scss']
})
export class CalendarEditarComponent implements OnInit {
  value = new Date;
  horarios: any[];
  horariosAsignados: any[];
  monthSelect: any[] = [];
  horarioSelect: any;
  dateSelect: any;
  dateValue: any;
  selected: any[];
  dates: Date[];
  disponibilidad: Date[] = []
  @Output() addDisponibilidad: EventEmitter<any> = new EventEmitter<any>();
  @Output() existeFechaContratada: EventEmitter<any> = new EventEmitter<any>();
  id: number;
  minDate=new Date();
  constructor(private aRouter: ActivatedRoute, private claseService: ClaseService, private primengConfig: PrimeNGConfig, public snackBar: MatSnackBar, public dialog: MatDialog) {
    this.aRouter.params.subscribe(
      (params: Params) => {
        this.id = Number(params.q);
      }
    );
    this.horarios = [

      { name: "07:00 AM", value: "7" },
      { name: "08:00 AM", value: "8" },
      { name: "09:00 AM", value: "9" },
      { name: "10:00 AM", value: "10" },
      { name: "11:00 AM", value: "11" },
      { name: "12:00 AM", value: "12" },
      { name: "13:00 PM", value: "13" },
      { name: "14:00 PM", value: "14" },
      { name: "15:00 PM", value: "15" },
      { name: "16:00 PM", value: "16" },
      { name: "17:00 PM", value: "17" },
      { name: "18:00 PM", value: "18" },
      { name: "19:00 PM", value: "19" },
      { name: "20:00 PM", value: "20" },
      { name: "21:00 PM", value: "21" },
      { name: "22:00 PM", value: "22" },


    ]

    this.claseService.obtenerDisponibilidad(this.id).subscribe(res => {
      res.forEach(element => {
        if (element.estado == 'DISPONIBLE') {
          this.disponibilidad.push(new Date(element.fecha))
        } else {
          this.existeFechaContratada.emit(this.disponibilidad)
        }
      });
      this.addDisponibilidad.emit(this.disponibilidad)

    })

  }

  ngOnInit(): void {

    this.primengConfig.ripple = true;

  }
  agregar() {
    if ((this.dates && this.dates.length > 0) && (this.selected && this.selected.length > 0)) {
      this.dates.forEach(f => {
        let fecha = new Date(f)
        this.selected.forEach(h => {
          let hora = new Date(0, 0, 0, h, 0, 0)
          let nuevo = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate(), hora.getHours(), 0, 0);
          if (this.includes(nuevo).length == 0) {
              this.disponibilidad.push(nuevo)
              this.dates = undefined
              this.addDisponibilidad.emit(this.disponibilidad)
              console.log(this.disponibilidad)
              this.snackBar.open('Disponibilidad agregada correctamente', "", {
                duration: 1500,
                horizontalPosition: "end",
                verticalPosition: "top",
                panelClass: ['green-snackbar']
              });
            
          } else {
            this.snackBar.open('No puede agregar la misma fecha dos veces', "", {
              duration: 1500,
              horizontalPosition: "end",
              verticalPosition: "top",
              panelClass: ['red-snackbar']
            });
          }
        })


      })

      this.selected = [];
    } else {
      this.snackBar.open('Debe agregar almenos una fecha y un horario', "", {
        duration: 1500,
        horizontalPosition: "end",
        verticalPosition: "top",
        panelClass: ['green-snackbar']
      });
    }


  }

  eliminar(date) {
    let index = this.disponibilidad.indexOf(date);
    this.disponibilidad.splice(index, 1);
    this.addDisponibilidad.emit(this.disponibilidad)

  }
  includes(fecha) {
    let f = new Date(fecha)
    let repetido = this.disponibilidad.filter(r => new Date(r).getFullYear() == f.getFullYear() && new Date(r).getMonth() == f.getMonth() && new Date(r).getDate() == f.getDate() && new Date(r).getHours() == f.getHours())
    return repetido;
  }



}
