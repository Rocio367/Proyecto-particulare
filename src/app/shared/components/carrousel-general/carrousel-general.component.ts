import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RegistroCard } from 'src/app/shared/models/registroCard';

@Component({
  selector: 'app-carrousel-general',
  templateUrl: './carrousel-general.component.html',
  styleUrls: ['./carrousel-general.component.scss']
})
export class CarrouselGeneralComponent implements OnInit {

  cards: RegistroCard[] = [];
  @Input() id: string;
  @Input() urlExtra: string;
  @Input() styleTitle='blanco';
  @Input() title: string;
  @Input() vanue = false;
  @Input() vanueValue;
  @Input() preURL;
  @Input() data: any[];
  @Input() background = "#ffffff";
  cant=4;
  language: any;

  constructor(public route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.language = params['language'];
    });
  }
  ngOnInit(): void {
    if(this.background=='#ffffff'){
      this.styleTitle='azul'
    }
    this.data.forEach(element => {
      let registro = new RegistroCard();
      registro.title = element.title;
      registro.img = element.path;
      if(this.urlExtra){
        registro.systemTitle=this.language+this.urlExtra+element.systemTitle;
      }else{
        if (element.systemTitle[0] == '/') {
          element.systemTitle = element.systemTitle.replace('/', '')
        }
        switch (element.typeEntity) {
          case "Event": {
            registro.systemTitle =this.language+ '/eventos/' + element.systemTitle;
          }
            break;
          case "Post": {
            registro.systemTitle = element.link;
          }
            break;
          default:
            registro.systemTitle = '/'+this.language+'/' + element.systemTitle;
  
            break;
        }
  
      }
  

      this.cards.push(registro);





    })
    /*if(this.cards.length<4){
      this.cant=this.cards.length;
    }*/
  }
  url(element: any) {
    let url = '';
    if (element.route) {
      if(element.externalLink){
        url = element.route;

      }else{
        url = element.route
        if (element.route[0] == '/') {
          url = element.route = element.route.replace('/', '')
        }
        url = '/' + this.language + '/' + url;
      }

    }
    if (element.systemTitle) {
      url = element.systemTitle
      if(element.externalLink){
        url = element.systemTitle;

      }else{
      if (element.systemTitle[0] == '/') {
        url = element.systemTitle = element.systemTitle.replace('/', '')
      }
      url = '/' + this.language + '/' + url;
    }
    }

    return url;
  }
}
