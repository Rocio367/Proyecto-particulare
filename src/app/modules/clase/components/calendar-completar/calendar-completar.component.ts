import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import * as moment from 'moment'
import { PrimeNGConfig, SelectItemGroup } from "primeng/api";
import { RegistroCalendar } from "src/app/shared/models/registroCalendario";
@Component({
  selector: 'app-calendar-completar',
  templateUrl: './calendar-completar.component.html',
  styleUrls: ['./calendar-completar.component.scss']
})
export class CalendarCompletarComponent implements OnInit {
  value = new Date;
  horarios: any[];
  monthSelect: any[] = [];
  horarioSelect: any;
  dateSelect: any;
  dateValue: any;
  selected: any[];

  constructor(private primengConfig: PrimeNGConfig, public dialog: MatDialog) {
    this.horarios=[
      {
        label: '',
        value: "",
        items: [
          { label: "07:00 AM", value: "7" },
          { label: "08:00 AM", value: "8" },
          { label: "09:00 AM", value: "9" },
          { label: "10:00 AM", value: "10" },
          { label: "11:00 AM", value: "11" },
          { label: "12:00 AM", value: "12" },
          { label: "13:00 PM", value: "12" },
          { label: "14:00 PM", value: "14" },
          { label: "15:00 PM", value: "15" },
          { label: "16:00 PM", value: "16" },
          { label: "17:00 PM", value: "17" },
          { label: "18:00 PM", value: "18" },
          { label: "19:00 PM", value: "19" },
          { label: "20:00 PM", value: "20" },
          { label: "21:00 PM", value: "21" },
          { label: "22:00 PM", value: "22" },
        ]
      },
    ]
   
   

  }

  ngOnInit(): void {
    let now = new Date();
    this.primengConfig.ripple = true;

  }

   agregar(){

   }
   eliminar(){
     
   }
 



}
