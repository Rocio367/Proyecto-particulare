import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from 'src/app/core/services/estadisticas/estadisticas.service';
import { Estadisticas } from 'src/app/shared/models/estadisticas';

@Component({
  selector: 'app-graficos-ganancias-profesor',
  templateUrl: './graficos-ganancias-profesor.component.html',
  styleUrls: ['./graficos-ganancias-profesor.component.scss']
})
export class GraficosGananciasProfesorComponent implements OnInit {

  g2: any;
  fecha2 = new Date();
  idParticular2: any;
  yearRange = "2020:" + new Date().getUTCFullYear().toString();
  anios: any[] = []
  chartOptions: any;
  totalModelos: number;
  totalClases: number;
  totalg2 = 0;
  totalg1 = 0;

  mensaje2 = false;

  colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    '#FB3939',
    '#EC4922',
    '#EC7822',
    '#EC9F22',
    '#ECC722',
    '#BEEC22',
    '#90EC22',
    '#28EC22',
    '#22EC7B',
    '#22ECB5',
    '#22A6EC',
    '#2275EC',
    '#2234EC',
    '#6B22EC',
    '#9F22EC',
    '#C422EC',
    '#EC2284']
  constructor(private estaditicasServices: EstadisticasService,) {
    let now = new Date().getFullYear();
    for (var i = 2021; i <= now; i++) {
      this.anios.push({ name: i.toString(), code: i.toString() })
    }


    this.onSelectG2();



    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };



  }

  ngOnInit(): void {

  }


  onSelectG2() {
    let e = new Estadisticas();
    e.anio = this.fecha2.getFullYear();
    e.mes = this.fecha2.getMonth() + 1;
    let data = [];
    let labels = [];
    this.estaditicasServices.porParticular(e, localStorage.getItem('idUser')).subscribe(res => {
      if (res.length > 0) {
        this.mensaje2 = false;
        res.forEach(c => {
          let index = labels.indexOf(c.producto.clase ? (c.producto.clase.materia.nombre) : (c.producto.modelo.materia.nombre));
          if (index != -1) {
            data[index] = data[index] + this.sacarPorcentaje(c.producto.costo ? c.producto.costo : c.monto );
            if (c.producto.clase) {
              this.totalg1 = this.totalg1 + this.sacarPorcentaje(Number(c.monto));
            } else {
              this.totalg2 = this.totalg2 + this.sacarPorcentaje(Number(c.producto.costo));
            }

          } else {
            labels.push(c.producto.clase ? (c.producto.clase.materia.nombre) : (c.producto.modelo.materia.nombre));
            data.push(this.sacarPorcentaje(c.monto ? c.monto : c.producto.costo))
            if (c.producto.clase) {
              this.totalg1 = this.totalg1 + this.sacarPorcentaje(Number(c.monto));
            } else {
              this.totalg2 = this.totalg2 + this.sacarPorcentaje(Number(c.producto.costo));
            }

          }
        });
        this.g2 = {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: this.colors,
              hoverBackgroundColor: this.colors
            }
          ]
        }
      } else {
        this.mensaje2 = true;

      }



    })
  }


  sacarPorcentaje(valor) {
    return (valor * 90) / 100;
  }
}

