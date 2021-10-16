import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import * as moment from 'moment'
import { PrimeNGConfig, SelectItemGroup } from "primeng/api";
import { RegistroCalendar } from "src/app/shared/models/registroCalendario";
@Component({
  selector: 'app-calendar-detalle-clase',
  templateUrl: './calendar-detalle-clase.component.html',
  styleUrls: ['./calendar-detalle-clase.component.scss']
})
export class CalendarDetalleClaseComponent implements OnInit {
  value=new Date;
  horarios:any[];
  monthSelect: any[]=[];
  horarioSelect:any;
  dateSelect: any;
  dateValue: any;
  selected: any[];
  constructor(private _snackbar:MatSnackBar,private primengConfig: PrimeNGConfig ,public dialog: MatDialog) {

    this.horarios = [
      {
        label: "",
        value: "de",
        items: [
          { label: "14:00 PM", value: "1" },
          { label: "15:00 PM", value: "2" },
          { label: "16:00 PM", value: "3" },
          { label: "17:00 PM", value: "4" }
        ]
      },
     
    
    ];
  }

  ngOnInit(): void {
    let now=new Date();
    this.primengConfig.ripple = true;

  }
 
  confirmar(){
    this._snackbar.open("La clase se agendo correctamente", "", {
      duration: 1500,
      horizontalPosition: "end",
      verticalPosition: "top",
      panelClass: ['green-snackbar']
    });
  }
  
}