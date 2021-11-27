import { DatePipe } from "@angular/common";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Params } from "@angular/router";
import { PrimeNGConfig } from "primeng/api";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { ClaseService } from "src/app/core/services/clase/clase.service";
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
  now = new Date()
  disponibilidad: any[] = []
  datesFilter: any[] = []
  selected: any[] = []
  minDate=new Date()

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
  id: number;
  idUser;
  
  constructor(public datepipe: DatePipe, public snackBar: MatSnackBar, private aRouter: ActivatedRoute, private _snackbar: MatSnackBar, private primengConfig: PrimeNGConfig, public dialog: MatDialog,
    public dialogService: DialogService, private claseServices: ClaseService) {
    this.aRouter.params.subscribe(
      (params: Params) => {
        this.id = Number(params.q);
      }
    );

    this.claseServices.obtenerDisponibilidad(this.id).subscribe(res => {
      res.forEach(element => {
        if (element.estado == 'DISPONIBLE' && new Date(element.fecha) > this.minDate ) {
          this.disponibilidad.push({  fecha:new Date(element.fecha),name: this.datepipe.transform(new Date(element.fecha), 'M/d/yy, h:mm a'), value: element.id })
          this.datesFilter.push({  fecha:new Date(element.fecha),name: this.datepipe.transform(new Date(element.fecha), 'M/d/yy, h:mm a'), value: element.id })
        }
      });
      this.anos.push({code: (this.now.getFullYear()).toString(), name: (this.now.getFullYear()).toString() })
      this.anos.push({ code: (this.now.getFullYear() + 1).toString(), name: (this.now.getFullYear() + 1).toString() })
      this.anos.push({ code: (this.now.getFullYear() + 2).toString(), name: (this.now.getFullYear() + 2).toString() })
      this.anos.push({ code: (this.now.getFullYear() + 2).toString(), name: (this.now.getFullYear() + 4).toString() })

      this.SelectedMes = this.meses.find(d => d.code == (this.now.getMonth() + 1).toString())
      this.SelectedAno = this.anos.find(d => d.code == (this.now.getFullYear()).toString())

    })
  }

  ngOnInit(): void {


    this.primengConfig.ripple = true;
    this.idUser = localStorage.getItem('idUser');
  }

  filter() {
    let filtered: any[] = [];
    filtered = this.datesFilter;
    console.log(filtered)
    if (this.SelectedAno) {
      filtered = filtered.filter(d => (new Date(d.fecha).getFullYear()) == this.SelectedAno.code);
      console.log(filtered)
    }
    if (this.SelectedMes) {
      filtered = filtered.filter(d => (new Date(d.fecha).getMonth()+1) == this.SelectedMes.code);
      console.log(filtered)

    }

    console.log(filtered)


    this.disponibilidad = filtered;
  }
  confirmar() {
    if(this.idUser){
      if(this.selected.length > 0){
        this.referenciaDialogoDinamico = this.dialogService.open(PagoComponent, {
          data: {
            clase: this.clase,
            detalles:this.selected,
            idUsuario: this.idUser
          },
          width: '90%',
          height: '90%',
        });
        this.selected=[]
      }else{
        this.snackBar.open('Debe seleccionar una fecha antes de confirmar', "", {
          duration: 1500,
          horizontalPosition: "end",
          verticalPosition: "top",
          panelClass: ['red-snackbar']
        });
      }
    }else{
      this.snackBar.open('Debe iniciar sesión para anotarse a una clase', "", {
        duration: 1500,
        horizontalPosition: "end",
        verticalPosition: "top",
        panelClass: ['red-snackbar']
      });
    }
  
  }


}