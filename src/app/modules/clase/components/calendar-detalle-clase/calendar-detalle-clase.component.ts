import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
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
  constructor(private primengConfig: PrimeNGConfig ,public dialog: MatDialog) {

    this.horarios = [
      {
        label: "Fecha 1",
        value: "de",
        items: [
          { label: "14:00 PM", value: "" },
          { label: "15:00 PM", value: "" },
          { label: "16:00 PM", value: "" },
          { label: "17:00 PM", value: "" }
        ]
      },
      {
        label: "Fecha 2",
        value: "us",
        items: [
          { label: "8:00 AM", value: "" },
          { label: "9:00 AM", value: " " },
          { label: "10:00 AM", value: " " },
          { label: "11:00 AM", value: " " }
        ]
      },
    
    ];
  }

  ngOnInit(): void {
    let now=new Date();
    this.primengConfig.ripple = true;

  }
 

  
}