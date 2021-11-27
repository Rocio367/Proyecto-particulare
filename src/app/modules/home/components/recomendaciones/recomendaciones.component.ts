import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadisticasService } from 'src/app/core/services/estadisticas/estadisticas.service';
import { Documento } from 'src/app/shared/models/documento';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.scss']
})
export class RecomendacionesComponent implements OnInit {

  data1: any[] = [];
  data2: any[] = [];
  data3: any[] = [];
  data4: any[] = [];
  cantCards = 4;
  cardSelected1=0;
  cardSelected2=0;
  cardSelected3=0;
  cardSelected4=0;
  constructor(private services: EstadisticasService,private router:Router) {
    this.services.clasesMasPupularesDelMes().subscribe(res => {
      res.forEach(r => {
        r.clases.cant = r.cant;
        if(!r.clases.modelo ){
          this.data1.push(r.clases)
        }
      });

      this.data1 = this.data1.sort(function (a, b) { return a.cant - b.cant });
      this.data1 = this.data1.slice(0, this.cantCards)
    })
    this.services.modelosMasPupularesDelMes().subscribe(res => {
      res.forEach(r => {
        r.modelos.cant = r.cant;
        this.data3.push(r.modelos)
      });

      this.data3 = this.data3.sort(function (a, b) { return a.cant - b.cant });
      this.data3 = this.data3.slice(0, this.cantCards)
    })

    this.services.agregadosRecientemente().subscribe(res => {
      res.clases.forEach(r => {
        if(r.estado== 'DISPONIBLE'){
          this.data2.push(r)
        }
      });
      this.data4 = res.modelos;
      this.data2 = this.data2.slice(0, this.cantCards)
      this.data4 = this.data4.slice(0, this.cantCards)
      console.log(this.data4)
    })
  }
  obtenerImagenEnBase64(documento: Documento): string {
    return `data:${documento.extension};base64,${documento.datos}`
  }
  ngOnInit(): void {

  }

  explorarClases() {
     this.router.navigate(['busqueda',{q:'undefined'}])
  }
  explorarModelos() {
    this.router.navigate(['buscar-modelos-alumno'])
  }

  cambiarSlider1(i: number) {
    this.cardSelected1=i;
  }
  cambiarSlider2(i: number) {
    this.cardSelected2=i;
  }
  cambiarSlider3(i: number) {
    this.cardSelected3=i;
  }
  cambiarSlider4(i: number) {
    this.cardSelected4=i;
  }
}



