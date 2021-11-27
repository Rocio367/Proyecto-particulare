import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Params } from "@angular/router";
import { PrimeNGConfig, SelectItemGroup } from "primeng/api";
import { ClaseService } from "src/app/core/services/clase/clase.service";
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
  fechasDisponibles: Date[] = [];
  fechasNoDisponibles: Date[] = [];
  id: number;
  minDate=new Date;
  constructor(private aRouter: ActivatedRoute, private primengConfig: PrimeNGConfig, public dialog: MatDialog, private claseService: ClaseService) {

    this.aRouter.params.subscribe(
      (params: Params) => {
        this.id = Number(params.q);
      }
    );
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

    this.claseService.obtenerDisponibilidad(this.id).subscribe(res => {
      res.forEach(element => {
        if (element.estado == 'DISPONIBLE' && new Date(element.fecha) > this.minDate ) {
          this.fechasDisponibles.push(new Date(element.fecha));
        } else {
          this.fechasNoDisponibles.push(new Date(element.fecha));
        }
      });
    })

  }

  ngOnInit(): void {
    let now = new Date();
    this.primengConfig.ripple = true;

  }


}