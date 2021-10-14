import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-calendar-editar',
  templateUrl: './calendar-editar.component.html',
  styleUrls: ['./calendar-editar.component.scss']
})
export class CalendarEditarComponent implements OnInit {

  value = new Date;
  horarios: any[];
  monthSelect: any[] = [];
  horarioSelect: any;
  dateSelect: any;
  dateValue: any;
  selected: any[];
  dates:Date[]=[new Date('10-6-2021'),new Date('10-13-2021'),new Date('10-18-2021')]
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

}
