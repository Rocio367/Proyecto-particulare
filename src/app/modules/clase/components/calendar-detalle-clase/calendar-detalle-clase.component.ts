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
  now=new Date()
  dates:Date[]=[new Date('2021-10-21'),new Date('2021-10-20'),new Date('2021-11-21'),new Date('2021-12-21'),new Date('2022-10-21')]
  datesFilter:Date[]=[new Date('2021-10-21'),new Date('2021-10-20'),new Date('2021-11-21'),new Date('2021-12-21'),new Date('2022-10-21')]
  meses=[
    {code:'1',label:'Enero'},
    {code:'2',name:'Febrero'},
    {code:'3',name:'Marzo'},
    {code:'4',name:'Abril'},
    {code:'5',name:'Mayo'},
    {code:'6',name:'Junio'},
    {code:'7',name:'Julio'},
    {code:'8',name:'Agosto'},
    {code:'9',name:'Septiembre'},
    {code:'10',name:'Octubre'},
    {code:'11',name:'Noviembre'},
    {code:'12',name:'Diciembre'},
  ]
  SelectedMes:any;

  anos=[]
  horariosAsignados:any[];
  SelectedAno:any;
  constructor(private _snackbar:MatSnackBar,private primengConfig: PrimeNGConfig ,public dialog: MatDialog) {

    this.anos.push({code:(this.now.getFullYear()).toString(),name:(this.now.getFullYear()).toString()})
    this.anos.push({code:(this.now.getFullYear()+1).toString(),name:(this.now.getFullYear()+1).toString()})
    this.anos.push({code:(this.now.getFullYear()+2).toString(),name:(this.now.getFullYear()+2).toString()})
    this.anos.push({code:(this.now.getFullYear()+2).toString(),name:(this.now.getFullYear()+4).toString()})

    this.SelectedMes=this.meses.find(d=> d.code == (this.now.getMonth()+1).toString())
    this.SelectedAno=this.anos.find(d=> d.code == (this.now.getFullYear()).toString())
    
    this.filter()
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
    let now=new Date();
    this.primengConfig.ripple = true;

  }
  ngDoCheck() {
   this.filter()
    
  }
  filter(){
    let filtered:any[]=[];
    filtered=this.datesFilter;
    if(this.SelectedAno){
      filtered=filtered.filter(d=>(d.getFullYear())== this.SelectedAno.code);
    }
    if(this.SelectedMes){
      filtered=filtered.filter(d=>(d.getMonth()+1)== this.SelectedMes.code);
    }

    this.dates=filtered;
  }
  confirmar(){
    this._snackbar.open("La clase se agendo correctamente", "", {
      duration: 1500,
      horizontalPosition: "end",
      verticalPosition: "top",
      panelClass: ['green-snackbar']
    });
  }

  verHorarios(v){
    this.value=v;
  }
  
}