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
  value = new Date;
  horarios: any[];
  horariosAsignados: any[];
  monthSelect: any[] = [];
  horarioSelect: any;
  dateSelect: any;
  dateValue: any;
  selected: any[];
  dates: Date[] = [new Date()]
  constructor(private primengConfig: PrimeNGConfig, public dialog: MatDialog) {
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

    //  this.horariosAsignados = [ "7" , "8" ,"9","4"]



  }

  ngOnInit(): void {
    let now = new Date();
    this.primengConfig.ripple = true;

  }
  verHorarios(date, i) {
    this.value = date;
    let index = 0;
    this.dates.forEach(d => {
      if (index == i) {
        $('#' + index).addClass('result-active')
      } else {
        $('#' + index).removeClass('result-active')
      }

    })
  }


}