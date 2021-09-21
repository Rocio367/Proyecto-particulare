import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RegistroCard } from 'src/app/shared/models/registroCard';

@Component({
  selector: 'app-carrousel-general',
  templateUrl: './carrousel-general.component.html',
  styleUrls: ['./carrousel-general.component.scss']
})
export class CarrouselGeneralComponent implements OnInit {
  @Input() styleTitle: string;
  @Input() title: string;
  @Input() data: any[];
  @Input() background = '#ffffff';
  cards: RegistroCard[] = [];
  cardsDesk: RegistroCard[] = [];
  active: number;
  language: any;
  cargado = false;
  constructor(public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // if (this.data) {
    let index = 0;
    if (true) {
      this.active =index;
      // this.data.forEach(element => {
      let registro = new RegistroCard();
      registro.title = 'titulo 1';
      registro.img = 'default-placeholder.png';
      registro.id = index;
      registro.categoria = 'Categoria';
      registro.link = 'link';
      registro.subtitle='Nombre particular';
      registro.avatar='default-user.png';
      this.cards.push(registro);
      index++;


      let registro1 = new RegistroCard();
      registro1.title = 'titulo 2';
      registro1.img = 'default-placeholder.png';
      registro1.id = index;
      registro1.categoria = 'Categoria';
      registro1.link = 'link';
      registro1.subtitle='Nombre particular';
      registro1.avatar='default-user.png';
      this.cards.push(registro1);
      index++;


      let registro2 = new RegistroCard();
      registro2.title = 'titulo 3';
      registro2.img = 'default-placeholder.png';
      registro2.id = index;
      registro2.categoria = 'Categoria';
      registro2.link = 'link';
      registro2.subtitle='Nombre particular';
      registro2.avatar='default-user.png';
      this.cards.push(registro2);
      index++;


      // });


    }

  }
  
}
