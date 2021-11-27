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
  
  constructor() {
  }
  ngOnInit(): void {
  }

}
