import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {
  @Input() title:string;
  @Input() noticesLinkTitle:string;
  @Input() noticesLink:string;
  @Input() path:string;
  @Input() slider:any[]=[];
  @Input() cabeceraButtons:any[]=[];
  @Input() background="#003567";
  @Input() cards:any[]=[];
  styleTitle='blanco'
  noticiaActive: string;
  language: any;

  constructor(public route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.language = params['language'];
    });
  }
  ngOnInit(): void {

    if (this.background=='#ffffff') {
      this.styleTitle = "azul";
    }
    if(this.slider){
      this.noticiaActive = this.slider[0].id;
      this.slider.forEach(element => {
        let registro;
        registro.title = element.title;
        registro.foto = element.path;
        registro.id = element.id;
        registro.categoria = element.categoryTitle;
        registro.link = element.path;
        if (registro.categoria) {
          registro.systemTitle = this.language+'/noticias/' + element.typeEntity.toLowerCase() + '/' + element.systemTitle;
        } else {
          registro.systemTitle = '/'+this.language+'/' + element.systemTitle;
        }
        this.cards.push(registro);
      });
  
    }
  
  }
  cambiarSlider(i: number) {
    this.noticiaActive = this.cards[i].id;

  }
}
