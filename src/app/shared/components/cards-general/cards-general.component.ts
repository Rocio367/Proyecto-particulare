import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GeneralService } from 'src/app/core/services/general/general.service';
import { RegistroCard } from 'src/app/shared/models/registroCard';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cards-general',
  templateUrl: './cards-general.component.html',
  styleUrls: ['./cards-general.component.scss']
})
export class CardsGeneralComponent implements OnInit {

  @Input() id: string;
  @Input() styleTitle = 'azul';
  @Input() title: string;
  @Input() type: string;
  @Input() vanue = false;
  @Input() numberCards = 3;
  @Input() data: any[];
  @Input() background = '#ffffff';
  cards: RegistroCard[] = [];
  cardsDesk: RegistroCard[] = [];
  noticiaActive: string;
  language: any;
  cargado=false;
  constructor(public route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.language = params['language'];
    });
  }

  ngOnInit(): void {
  
   
    if (this.data) {
      this.noticiaActive = this.data[0].id;

      this.data.forEach(element => {
        let registro = new RegistroCard();
        registro.title = element.title;
        registro.img = element.path;
        registro.id = element.id;
        registro.categoria = element.categoryTitle;
        registro.link = element.path;
        if (registro.categoria) {
          registro.systemTitle = this.language + '/noticias/' + element.typeEntity.toLowerCase() + '/' + element.systemTitle;
        } else {
          registro.systemTitle = '/' + this.language + '/' + element.systemTitle;
        }
        this.cards.push(registro);
      });
    
      this.cardsDesk=this.cards.slice(0,6)

    }

  }
  cambiarSlider(i: number) {
    this.noticiaActive = this.cards[i].id;

  }

  addCards(){
    this.cargado=true;
    this.cardsDesk=this.cards;
  }

  removeCards(){
    this.cargado=false;
    this.cardsDesk=this.cards.slice(0,6)
  }

}
