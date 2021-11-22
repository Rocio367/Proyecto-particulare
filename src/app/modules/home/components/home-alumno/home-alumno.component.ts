import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaseService } from 'src/app/core/services/clase/clase.service';
import { EstadisticasService } from 'src/app/core/services/estadisticas/estadisticas.service';
import { Documento } from 'src/app/shared/models/documento';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.component.html',
  styleUrls: ['./home-alumno.component.scss']
})
export class HomeAlumnoComponent implements OnInit {
  data1: any[] = [];
  data2: any[] = [];
  data3: any[] = [];
  data4: any[] = [];
  cantCards = 4;
  constructor(private services: EstadisticasService,private router:Router) {
    this.services.clasesMasPupularesDelMes().subscribe(res => {
      res.forEach(r => {
        r.clases.cant = r.cant;
        this.data1.push(r.clases)
      });

      this.data1 = this.data1.sort(function (a, b) { return a.cant - b.cant });
      this.data1 = this.data1.slice(0, this.cantCards)
    })

    this.services.agregadosRecientemente().subscribe(res => {
      this.data2 = res.clases;
      this.data4 = res.modelos;
      this.data2 = this.data2.slice(0, this.cantCards)
      this.data4 = this.data4.slice(0, this.cantCards)
      console.log(this.data2)

    })
  }
  obtenerImagenEnBase64(documento: Documento): string {
    return `data:${documento.extension};base64,${documento.datos}`
  }
  ngOnInit(): void {

  }

  explorarClases() {
     this.router.navigate(['busqueda;q=undefined'])
  }
  explorarModelos() {
    this.router.navigate(['buscar-modelos-alumno'])
  }
}
