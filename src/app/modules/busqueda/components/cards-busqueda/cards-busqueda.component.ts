import { Component, Input, OnInit } from '@angular/core';
import { Resultado } from 'src/app/shared/models/resultado';

@Component({
  selector: 'app-cards-busqueda',
  templateUrl: './cards-busqueda.component.html',
  styleUrls: ['./cards-busqueda.component.scss']
})
export class CardsBusquedaComponent implements OnInit {
  @Input() registro:Resultado;
  constructor() { }

  ngOnInit(): void {
  }

}
