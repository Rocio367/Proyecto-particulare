import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/core/services/general/general.service';
import { RegistroCard } from 'src/app/shared/models/registroCard';

@Component({
  selector: 'app-primera-foto-destacada',
  templateUrl: './primera-foto-destacada.component.html',
  styleUrls: ['./primera-foto-destacada.component.scss']
})
export class PrimeraFotoDestacadaComponent implements OnInit {
  @Input() data:any;
  @Input() title:any;
  ListaUCActualidad: RegistroCard[] = [];
  ActividadActive: string;
  primerElemento = new RegistroCard();
  @Input() background='#003567';
  styleTitle='azul';
  constructor() {

  }
  ngOnInit(): void {
    if (this.background=='#ffffff') {
      this.styleTitle = "azul";
    }
      let lista = this.data;
      this.ActividadActive = lista[0].id;
      lista.forEach(element => {
        let registro = new RegistroCard();
        registro.title = element.title;
        registro.img = element.path;
        registro.id = element.id;
        registro.categoria = element.categoryTitle;
        registro.link = element.link;

        this.ListaUCActualidad.push(registro);
      });
    
  }

  cambiarSlider(i: number) {
    this.ActividadActive = this.ListaUCActualidad[i].id;

  }
}
