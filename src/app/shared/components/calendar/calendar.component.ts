import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import * as moment from 'moment'
import { RegistroCalendar } from "../../models/registroCalendario";
import { ModalAnotarseComponent } from "../modal-anotarse/modal-anotarse.component";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  week: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];


  monthSelect: any[]=[];
  agendaAConfirmar: RegistroCalendar[]=[];
  dateSelect: any;
  dateValue: any;
  constructor( public dialog: MatDialog) {

  }

  ngOnInit(): void {
    let now=new Date();

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

  changeMonth(flag) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day) {
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;


  }

  openModal(date :RegistroCalendar){  
    this.dialog.open(ModalAnotarseComponent, { panelClass: 'custom-dialog-container', data: date});
  }
  addDate(date :RegistroCalendar){
    this.agendaAConfirmar.push(date)
  }

  removeDate(){
    
  }
}