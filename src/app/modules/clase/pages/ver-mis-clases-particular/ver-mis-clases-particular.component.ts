import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-mis-clases-particular',
  templateUrl: './ver-mis-clases-particular.component.html',
  styleUrls: ['./ver-mis-clases-particular.component.scss']
})
export class VerMisClasesParticularComponent implements OnInit {



  orden=[{name:'Mas recientes',code:'1'},{name:'Mas antiguos',code:'2'}]
  filtro=[{name:'Disponible',code:'1'},{name:'No disponible',code:'2'}]

  constructor() { }

  ngOnInit(): void {
  }

}
