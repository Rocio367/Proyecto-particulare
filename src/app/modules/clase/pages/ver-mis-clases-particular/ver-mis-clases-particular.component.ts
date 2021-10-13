import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/shared/models/publicacion';

@Component({
  selector: 'app-ver-mis-clases-particular',
  templateUrl: './ver-mis-clases-particular.component.html',
  styleUrls: ['./ver-mis-clases-particular.component.scss']
})
export class VerMisClasesParticularComponent implements OnInit {



  orden=[{name:'Mas recientes',code:'1'},{name:'Mas antiguos',code:'2'}]
  filtro=[{name:'Disponible',code:'1'},{name:'No disponible',code:'2'}]
  publicacion: Publicacion[];

  sortOrder: number;
  sortKey='id';
  sortField: string;
  selectedEstado:string;

  constructor() { }

  ngOnInit(): void {
    this.publicacion = [
      { materia: 'Matematica', nivel: 'Secundario básico',modo:'online', estado: 'Finalizada', tipo: 'individual'},
      { materia: 'Matematica', nivel: 'Secundario Superior', modo:'online', estado: 'Finalizada', tipo: 'individual'},
      { materia: 'Algebra', nivel: 'Universidad', modo:'online', estado: 'Ausente', tipo:'individual'},
      { materia: 'Matematica', nivel: 'Universidad', modo:'online', estado: 'Pendiente', tipo: 'individual'},
    ];
  }

}
