import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-grafico-ganancias-administrador',
  templateUrl: './grafico-ganancias-administrador.component.html',
  styleUrls: ['./grafico-ganancias-administrador.component.scss']
})
export class GraficoGananciasAdministradorComponent implements OnInit {
  data: any;
    
  constructor() {
    //ganacias por materia (puede filtrar por año y mes )
    //ganacias materia por particular (puede filtrar por año y mes y )
    //ganacias en general clases (puede filtrar por año y mes )
    //ganacias en general Modelos (puede filtrar por año y mes )
    this.data = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }
      ]
    }
  }
  ngOnInit(): void {
    
  }

 
}

