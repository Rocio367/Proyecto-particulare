import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {AlumnoCondicion} from '../models/alumnoCondicion';
import {Tipo} from '../models/tipo';

@Directive({
  selector:'[appCondicion]'
})
export class CondicionDirective implements OnInit {

  @Input() condicion:AlumnoCondicion;
  @Input() tipo:Tipo;

  constructor(private el:ElementRef, private renderer:Renderer2) {
  }

  ngOnInit():void {
    if (this.condicion) {
      switch (this.condicion.tipo.id) {
      case 'CONDICION_1':
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#b3e596');
        this.renderer.setStyle(this.el.nativeElement, 'color', '#353535');
        break;
      case 'CONDICION_2':
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#721c24');
        this.renderer.setStyle(this.el.nativeElement, 'color', '#FFFFFF');
        break;
      default:
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#f7a36e');
        this.renderer.setStyle(this.el.nativeElement, 'color', '#353535');
    }
    } else if (this.tipo) {
      switch (this.tipo.id) {
        case 'CONDICION_1':
          this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#b3e596');
          this.renderer.setStyle(this.el.nativeElement, 'color', '#353535');
          break;
        case 'CONDICION_2':
          this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#721c24');
          this.renderer.setStyle(this.el.nativeElement, 'color', '#FFFFFF');
          break;
        default:
          this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#f7a36e');
          this.renderer.setStyle(this.el.nativeElement, 'color', '#353535');
      }
    }
  }
}
