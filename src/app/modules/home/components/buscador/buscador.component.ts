import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BusquedaService } from './../../../../core/services/busqueda/busqueda.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  buscarText: string;


  constructor(private router: Router, private busquedaService : BusquedaService) {

  }
  ngOnInit(): void {
  }

  results: string[];

  search(event) {
     this.results=this.results.filter(d=>d.includes(event))
  }
  buscar() {
    this.router.navigate(['busqueda', { q: this.buscarText }])
  }

}