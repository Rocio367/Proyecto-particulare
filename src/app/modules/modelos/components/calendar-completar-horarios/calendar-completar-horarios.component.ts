import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-calendar-completar-horarios',
  templateUrl: './calendar-completar-horarios.component.html',
  styleUrls: ['./calendar-completar-horarios.component.scss']
})
export class CalendarCompletarHorariosComponent implements OnInit {

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
  minDate=new Date();
  @Output() addDisponibilidad: EventEmitter<any> = new EventEmitter<any>();

  constructor(private primengConfig: PrimeNGConfig, public snackBar: MatSnackBar, public dialog: MatDialog) {
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
  }
  includes(fecha) {
    let f = new Date(fecha)
    let repetido = this.disponibilidad.filter(r => r.getFullYear() == f.getFullYear() && r.getMonth() == f.getMonth() && r.getDate() == f.getDate() && r.getHours() == f.getHours())
    return repetido;
  }
 


}



