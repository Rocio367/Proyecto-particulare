import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { ClaseService } from 'src/app/core/services/clase/clase.service';
import { Clase } from 'src/app/shared/models/clase';

@Component({
  selector: 'app-calendar-seleccion',
  templateUrl: './calendar-seleccion.component.html',
  styleUrls: ['./calendar-seleccion.component.scss']
})
export class CalendarSeleccionComponent implements OnInit {
  value = new Date;
  horarios: any[];
  monthSelect: any[] = [];
  horarioSelect: any;
  dateSelect: any;
  dateValue: any;
  now = new Date()
  disponibilidad: any[] = []
  datesFilter: any[] = []
  selected: any[] = []
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
  minDate=new Date()
  horariosAsignados: any[];
  SelectedAno: any;
  @Input() id: number;
  @Output() addSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor(public datepipe: DatePipe, public snackBar: MatSnackBar, private aRouter: ActivatedRoute, private primengConfig: PrimeNGConfig, public dialog: MatDialog,
    private claseServices: ClaseService) {

 
  }

  ngOnInit(): void {
    this.claseServices.obtenerDisponibilidadModelos(this.id).subscribe(res => {
      res.forEach(element => {
        if (element.estado == 'DISPONIBLE' && new Date(element.fecha) > this.minDate ) {
          this.disponibilidad.push({ fecha: new Date(element.fecha), name: this.datepipe.transform(new Date(element.fecha), 'M/d/yy, h:mm a'), value: element.id })
          this.datesFilter.push({ fecha: new Date(element.fecha), name: this.datepipe.transform(new Date(element.fecha), 'M/d/yy, h:mm a'), value: element.id })
        }
      });
      
      this.anos.push({ code: (this.now.getFullYear()).toString(), name: (this.now.getFullYear()).toString() })
      this.anos.push({ code: (this.now.getFullYear() + 1).toString(), name: (this.now.getFullYear() + 1).toString() })
      this.anos.push({ code: (this.now.getFullYear() + 2).toString(), name: (this.now.getFullYear() + 2).toString() })
      this.anos.push({ code: (this.now.getFullYear() + 2).toString(), name: (this.now.getFullYear() + 4).toString() })

      this.SelectedMes = this.meses.find(d => d.code == (this.now.getMonth() + 1).toString())
      this.SelectedAno = this.anos.find(d => d.code == (this.now.getFullYear()).toString())

    })

    this.primengConfig.ripple = true;
  }

  filter() {
    let filtered: any[] = [];
    filtered = this.datesFilter;
    if (this.SelectedAno) {
      filtered = filtered.filter(d => (new Date(d.fecha).getFullYear()) == this.SelectedAno.code);
    }
    if (this.SelectedMes) {
      filtered = filtered.filter(d => (new Date(d.fecha).getMonth() + 1) == this.SelectedMes.code);

    }
    this.disponibilidad = filtered;
  }
  add(){
    this.addSelected.emit(this.selected)
  }
}