import { DataRowOutlet } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EstadisticasService } from 'src/app/core/services/estadisticas/estadisticas.service';
import { Estadisticas } from 'src/app/shared/models/estadisticas';

@Component({
  selector: 'app-grafico-ganancias-administrador',
  templateUrl: './grafico-ganancias-administrador.component.html',
  styleUrls: ['./grafico-ganancias-administrador.component.scss']
})
export class GraficoGananciasAdministradorComponent implements OnInit {
  g1: any;
  fecha1 = new Date();
  g2: any;
  fecha2 = new Date();
  idParticular2: any;
  g3: any;
  fecha3: any;
  g4: any;
  fecha4 = new Date();
  g5: any;
  fecha5 = new Date();
  yearRange = "2020:" + new Date().getUTCFullYear().toString();
  anios: any[] = []
  particulares: any[] = [];
  chartOptions: any;
  totalModelos: number;
  totalClases: number;
  totalg1 = 0;
  totalg2 = 0;
  totalg4 = 0;
  totalg5 = 0;
  mensaje1 = false;
  mensaje2 = false;
  mensaje3 = false;
  mensaje4 = false;
  mensaje5 = false;
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
    this.fecha3 = this.anios[0]

    this.estaditicasServices.traerParticulares().subscribe(res => {
      res.forEach(element => {
        this.particulares.push({ name: element.usuario.nombre + ' , ' + element.usuario.apellido, code: element.usuario.id })
      });
      this.idParticular2 = this.particulares[0]
      this.onSelectG2();
    })

    this.onSelectG1();
    this.onSelectG4();
    this.onSelectG5();


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

    this.onSelectG3();


  }

  ngOnInit(): void {

  }

  onSelectG1() {
    let e = new Estadisticas();
    e.anio = this.fecha1.getFullYear();
    e.mes = this.fecha1.getMonth() + 1;
    let data = [];
    let labels = [];

    this.estaditicasServices.porCompras(e).subscribe(res => {
      if (res.length > 0) {
        this.mensaje1 = false;

        res.forEach(c => {
          let index = labels.indexOf(c.producto.clase ? (c.producto.clase.materia.nombre) : (c.producto.modelo.materia.nombre));
          if (index != -1) {
            data[index] = data[index] + this.sacarPorcentaje(c.monto);
            this.totalg1 = this.totalg1 + this.sacarPorcentaje(Number(c.monto));

          } else {
            labels.push(c.producto.clase ? (c.producto.clase.materia.nombre) : (c.producto.modelo.materia.nombre))
            data.push(this.sacarPorcentaje(c.monto));
            this.totalg1 = this.totalg1 + this.sacarPorcentaje(Number(c.monto));
          }
        });

        this.g1 = {
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
        this.mensaje1 = true;

      }

    })
  }
  onSelectG2() {
    let e = new Estadisticas();
    e.anio = this.fecha2.getFullYear();
    e.mes = this.fecha2.getMonth() + 1;
    let data = [];
    let labels = [];
    this.estaditicasServices.porParticular(e, this.idParticular2.code).subscribe(res => {
      if (res.length > 0) {
        this.mensaje2 = false;
        res.forEach(c => {
          let index = labels.indexOf(c.producto.clase ? (c.producto.clase.materia.nombre) : (c.producto.modelo.materia.nombre));
          if (index != -1) {
            data[index] = data[index] +this.sacarPorcentaje(c.monto);
            this.totalg2 = this.totalg2 +this.sacarPorcentaje( Number(c.monto));

          } else {
            labels.push(c.producto.clase ? (c.producto.clase.materia.nombre) : (c.producto.modelo.materia.nombre))
            data.push(this.sacarPorcentaje(c.monto))
            this.totalg2 = this.totalg2 + this.sacarPorcentaje(Number(c.monto));

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

  onSelectG3() {
    let e = new Estadisticas();
    e.anio = Number(this.fecha3.code);
    e.mes = Number(this.fecha3.code);

    this.estaditicasServices.porModeloClases(e).subscribe(res => {
      this.totalClases = this.sacarPorcentaje(res.totalClases);
      this.totalModelos = this.sacarPorcentaje(res.totalModelos);
      this.g3 = {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: [{
          type: 'bar',
          label: 'Clases',
          backgroundColor: '#66BB6A',
          data: res.clases,
          borderColor: 'white',
          borderWidth: 2
        }, {
          type: 'bar',
          label: 'Modelos',
          backgroundColor: '#FFA726',
          data: res.modelos,

        }]
      };


    })
  }

  onSelectG4() {
    let e = new Estadisticas();
    e.anio = this.fecha4.getFullYear();
    e.mes = this.fecha4.getMonth() + 1;
    let data = [];
    let labels = [];
    this.estaditicasServices.porModelo(e).subscribe(res => {
      if (res.length > 0) {
        this.mensaje4 = false;

        res.forEach(c => {
          let index = labels.indexOf(c.producto.clase ? (c.producto.clase.materia.nombre) : (c.producto.modelo.materia.nombre));
          if (index != -1) {
            data[index] = data[index] + this.sacarPorcentaje(c.monto);
            this.totalg4 = this.totalg4 + this.sacarPorcentaje(Number(c.monto));

          } else {
            labels.push(c.producto.clase ? (c.producto.clase.materia.nombre) : (c.producto.modelo.materia.nombre))
            data.push(this.sacarPorcentaje(c.monto))
            this.totalg4 = this.totalg4 + this.sacarPorcentaje(Number(c.monto));

          }
        });

        this.g4 = {
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
        this.mensaje4 = true;
      }



    })
  }

  onSelectG5() {
    let e = new Estadisticas();
    e.anio = this.fecha5.getFullYear();
    e.mes = this.fecha5.getMonth() + 1;
    let data = [];
    let labels = [];
    this.estaditicasServices.porClases(e).subscribe(res => {
      if (res.length > 0) {
        this.mensaje5 = false;

        res.forEach(c => {
          let index = labels.indexOf(c.producto.clase ? (c.producto.clase.materia.nombre) : (c.producto.modelo.materia.nombre));
          if (index != -1) {
            data[index] = data[index] + this.sacarPorcentaje(c.monto);
            this.totalg5 = this.totalg5 + this.sacarPorcentaje(Number(c.monto));

          } else {
            labels.push(c.producto.clase ? (c.producto.clase.materia.nombre) : (c.producto.modelo.materia.nombre))
            data.push(this.sacarPorcentaje(c.monto))
            this.totalg5 = this.totalg5 + this.sacarPorcentaje(Number(c.monto));

          }
        });
        this.g5 = {
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
        this.mensaje5 = true;
      }

    })
  }

  sacarPorcentaje(valor){
    return (valor * 10 )/100;
  }
}

