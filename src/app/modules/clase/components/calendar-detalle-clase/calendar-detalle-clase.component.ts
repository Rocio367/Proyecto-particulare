import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { PrimeNGConfig } from "primeng/api";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { Clase } from "src/app/shared/models/clase";
import { PagoComponent } from "../../pages/pago/pago.component";

@Component({
  selector: 'app-calendar-detalle-clase',
  templateUrl: './calendar-detalle-clase.component.html',
  styleUrls: ['./calendar-detalle-clase.component.scss'],
  providers: [DialogService]
})
export class CalendarDetalleClaseComponent implements OnInit {
  value = new Date;
  horarios: any[];
  monthSelect: any[] = [];
  horarioSelect: any;
  dateSelect: any;
  dateValue: any;
  selected: any[];
  now = new Date()
  disponibilidad: any[]
  datesFilter: any[];
  datosAgenda:any[]=[]
  meses = [
    { code: '1', label: 'Enero' },
    { code: '2', name: 'Febrero' },
    { code: '3', name: 'Marzo' },
    { code: '4', name: 'Abril' },
    { code: '5', name: 'Mayo' },
    { code: '6', name: 'Junio' },
    { code: '7', name: 'Julio' },
    { code: '8', name: 'Agosto' },
    { code: '9', name: 'Septiembre' },
    { code: '10', name: 'Octubre' },
    { code: '11', name: 'Noviembre' },
    { code: '12', name: 'Diciembre' },
  ]
  SelectedMes: any;

  anos = []
  horariosAsignados: any[];
  SelectedAno: any;
  @Input()
  clase: Clase;
  referenciaDialogoDinamico: DynamicDialogRef;

  constructor(private _snackbar: MatSnackBar, private primengConfig: PrimeNGConfig, public dialog: MatDialog,
    public dialogService: DialogService) {

    this.anos.push({ code: (this.now.getFullYear()).toString(), name: (this.now.getFullYear()).toString() })
    this.anos.push({ code: (this.now.getFullYear() + 1).toString(), name: (this.now.getFullYear() + 1).toString() })
    this.anos.push({ code: (this.now.getFullYear() + 2).toString(), name: (this.now.getFullYear() + 2).toString() })
    this.anos.push({ code: (this.now.getFullYear() + 2).toString(), name: (this.now.getFullYear() + 4).toString() })

    this.SelectedMes = this.meses.find(d => d.code == (this.now.getMonth() + 1).toString())
    this.SelectedAno = this.anos.find(d => d.code == (this.now.getFullYear()).toString())

  
    //ejemplo de como vendria eljson   de disponibilidad el back
    this.disponibilidad = [
      {
        date: new Date('2021-10-21'),
        horarios: [
          { name: "07:00 AM", value: "7" },
          { name: "08:00 AM", value: "8" },
          { name: "09:00 AM", value: "9" },
          { name: "10:00 AM", value: "10" }
        ]
      },
      {
        date: new Date('2021-10-22'),
        horarios: [
          { name: "10:00 AM", value: "10" },
          { name: "11:00 AM", value: "11" },
          { name: "14:00 PM", value: "14" },
          { name: "15:00 PM", value: "15" }
        ]
      },
      {
        date: new Date('2021-10-23'),
        horarios: [
          { name: "09:00 AM", value: "9" },
          { name: "10:00 AM", value: "10" }

        ]
      },
      {
        date: new Date('2021-10-24'),
        horarios: [
          { name: "09:00 AM", value: "9" },
          { name: "10:00 AM", value: "10" },
          { name: "17:00 AM", value: "17" },
          { name: "18:00 AM", value: "18" }
        ]
      }
    ]
    this.value=this.disponibilidad[0].date
    this.horarios=this.disponibilidad[0].horarios
    //igualo array para luego filtrar
    this.datesFilter = this.disponibilidad;

    this.filter()

  }

  ngOnInit(): void {
    let now = new Date();
    this.primengConfig.ripple = true;

  }
  ngDoCheck() {
    this.filter()

  }
  filter() {
    let filtered: any[] = [];
    filtered = this.datesFilter;
    if (this.SelectedAno) {
      filtered = filtered.filter(d => (d.date.getFullYear()) == this.SelectedAno.code);
    }
    if (this.SelectedMes) {
      filtered = filtered.filter(d => (d.date.getMonth() + 1) == this.SelectedMes.code);
    }

    this.disponibilidad = filtered;
  }
  confirmar() {
    this.referenciaDialogoDinamico = this.dialogService.open(PagoComponent, {
      data: {
        clase: this.clase
      },
      width: '90%'
    });
  }

  verHorarios(v) {
    this.value = v.date;
    this.horarios = v.horarios;
  }

}