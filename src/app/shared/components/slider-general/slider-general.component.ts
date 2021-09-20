import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/core/services/general/general.service';
import { RegistroSlider } from 'src/app/shared/models/RegistroSlider';

@Component({
  selector: 'app-slider-general',
  templateUrl: './slider-general.component.html',
  styleUrls: ['./slider-general.component.scss']
})
export class SliderGeneralComponent implements OnInit {
  @Input() data: any[] = []
  Active: string;
  items: RegistroSlider[] = [];
  primerElemento = new RegistroSlider();
  constructor() {
  }
  ngOnInit(): void {
    let lista = this.data;
    console.log(this.data)
    this.Active = lista[0].id;
    lista.forEach(element => {
      let registro = new RegistroSlider();
      registro.title = element.title;
      registro.foto = element.path;
      registro.fotoMovil = element.pathMobile;
      registro.id = element.id;
      registro.categoria = element.tag;
      registro.link = element.linkExternal;
      registro.button=element.buttonColor;
      this.items.push(registro);

    });
  }

  cambiarSlider(i: number) {
    this.Active = this.items[i].id;

  }

}
