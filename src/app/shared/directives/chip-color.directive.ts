import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {FacultadCarrera} from '../models/facultadCarrera';


@Directive({
    selector:'[appChipColor]'
})
export class ChipColorDirective implements OnInit, OnChanges {

    @Input() facultadCarrera:FacultadCarrera;

    colorsArray:any[] = ['#0080FF', '#04B404', '#FA5882',
        '#08088A', '#FF8000', '#12C086', '#DF0101',
        '#7848A5', '#EDCD05', '#DF6412', '#B1DE0F',
        '#0080FF', '#04B404', '#FA5882',
        '#08088A', '#FF8000', '#12C086', '#DF0101',
        '#7848A5', '#EDCD05', '#DF6412', '#B1DE0F'];

    constructor(private el:ElementRef, private renderer:Renderer2) {
    }

    ngOnInit():void {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.colorsArray[this.facultadCarrera.facultad.id]);
    }

    ngOnChanges(ignored:SimpleChanges) {
        this.ngOnInit();
    }
}
