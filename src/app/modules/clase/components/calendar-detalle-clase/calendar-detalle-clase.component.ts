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

    this.getDaysFromDate(now.getMonth()+2, now.getFullYear())
  }
 
  
  getDaysFromDate(month, year) {
    const startDate = moment.utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate;

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`);
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday(),
        date:new Date(`${year}-${month}-${a}`)
      };
    });

    arrayDays.forEach(day=>{
    
      let registro= new RegistroCalendar();
      registro.date=day.date;
      registro.name=day.name;
      registro.value=day.value;
      registro.indexWeek=day.indexWeek;
      if(day.value == 3 || day.value == 4 || day.value == 5 ||  day.value == 20 || day.value == 21 ){
        registro.available=true;
        registro.available_hours=['09:00AM','10:00AM','2:00PM'];
        registro.reserved_hours=['09:00AM'];
      }
      registro.name=day.name;
      if(day.value == 3 || day.value == 4 ){
        registro.available=false;
        registro.available_hours=['09:00AM','10:00AM','2:00PM'];
        registro.reserved_hours=['09:00AM','10:00AM','2:00PM'];
      }

      this.monthSelect.push(registro)

    })
  }

  
}