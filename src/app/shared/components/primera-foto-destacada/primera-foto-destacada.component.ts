import { Component, Input, OnInit } from '@angular/core';
import { RegistroCard } from 'src/app/shared/models/registroCard';

@Component({
  selector: 'app-primera-foto-destacada',
  templateUrl: './primera-foto-destacada.component.html',
  styleUrls: ['./primera-foto-destacada.component.scss']
})
export class PrimeraFotoDestacadaComponent implements OnInit {
  @Input() data: any;
  @Input() title: any;
  cards: RegistroCard[] = [];
  active: number;
  primerElemento = new RegistroCard();
  @Input() background = '#003567';
  styleTitle = 'azul';
  constructor() {

  }
  ngOnInit(): void {

    let index=0;
   // this.active = cards[0].id;
   // cards.forEach(element => {
    this.active =index;
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


    let registro3 = new RegistroCard();
    registro3.title = 'titulo 4';
    registro3.img = 'default-placeholder.png';
    registro3.id = index;
    registro3.categoria = 'Categoria';
    registro3.link = 'link';
    registro3.subtitle='Nombre particular';
    registro3.avatar='default-user.png';
    this.cards.push(registro3);
    index++;
  //  });

  }

  cambiarSlider(i: number) {
    this.active = this.cards[i].id;

  }
}
