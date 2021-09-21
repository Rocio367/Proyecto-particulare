import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RegistroCard } from 'src/app/shared/models/registroCard';

@Component({
  selector: 'app-cards-general-dos',
  templateUrl: './cards-general-dos.component.html',
  styleUrls: ['./cards-general-dos.component.scss']
})
export class CardsGeneralDosComponent implements OnInit {

  @Input() title:string;
  @Input() data:any;
  linkFacebook:string;
  linkInstagram:string;
  linkYoutube:string;
  linnkIn:string;
  ListaSeguinos:RegistroCard[]=[];
  Active:number;
  language: any;
  @Input() background='#003567';
  styleTitle='azul';

  constructor(public route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.language = params['language'];
    });
  }
  ngOnInit(): void {
    if (this.background=='#ffffff') {
      this.styleTitle = "azul";
    }
      this.Active=1;
      let index=1;
      this.data.forEach(element => {

       let registro= new RegistroCard();
       registro.title=element.title;
       registro.img=element.path;
       registro.link=element.link;
       registro.id=index;
       this.ListaSeguinos.push(registro);
       index++;

    });
  
  }
  cambiarSlider(i:number){
    this.Active=this.ListaSeguinos[i].id;

  }

}
