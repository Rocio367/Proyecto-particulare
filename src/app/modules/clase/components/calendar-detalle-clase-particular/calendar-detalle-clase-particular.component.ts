import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import * as moment from 'moment'
import { PrimeNGConfig, SelectItemGroup } from "primeng/api";
import { RegistroCalendar } from "src/app/shared/models/registroCalendario";
@Component({
  selector: 'app-calendar-detalle-clase-particular',
  templateUrl: './calendar-detalle-clase-particular.component.html',
  styleUrls: ['./calendar-detalle-clase-particular.component.scss']
})
export class CalendarDetalleClaseParticularComponent implements OnInit {
  value=new Date;
  horarios:any[];
  monthSelect: any[]=[];
  horarioSelect:any;
  dateSelect: any;
  dateValue: any;
  selected: any[];
  dates:Date[]=[new Date('10-06-2021')]
  constructor(private primengConfig: PrimeNGConfig ,public dialog: MatDialog) {
    this.horarios = [
          { name: "14:00 PM", code: "" },
          { name: "15:00 PM", code: "" },
          { name: "16:00 PM", code: "" },
          { name: "17:00 PM", code: "" }
        ]

  }

  ngOnInit(): void {
    let now=new Date();
    this.primengConfig.ripple = true;

  }
 


}
