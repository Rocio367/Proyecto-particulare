import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-contratar-modelos',
  templateUrl: './modal-contratar-modelos.component.html',
  styleUrls: ['./modal-contratar-modelos.component.scss']
})
export class ModalContratarModelosComponent implements OnInit {
  selectedType='1';
  tipos: any[] = [{ code: '1', name: 'Contratar solo resolución', },
  { code: '2', name: 'Contratar resolución y explicacion' },
]
  constructor() {  

  }
  ngOnInit(): void {
  }

  confirmarPagar() {

  }
}
