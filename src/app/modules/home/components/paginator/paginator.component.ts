import { EventEmitter, Input, Output, } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-paginator',
  templateUrl:'./paginator.component.html',
  styleUrls:['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  number_page:number;
  size_page:number;
  @Output() eventEmmiterChangePage:EventEmitter<number>=new EventEmitter<number>();
  @Input() total=0;
  pages_total:number;
  pages:number[] = [];
  pages_totales:number[] = [];
  constructor() { 
    this.number_page=1;
    this.size_page=15;
    
  }

  ngAfterViewInit(){
   

  }
  ngOnInit():void {


  }
  ngOnChanges(changes: any) {
    this.pages_totales=[];
    let total =changes.total.currentValue;
    this.pages_total=Math.ceil(total/this.size_page);
    for(let i = 0; i < this.pages_total; i++) {
     
        this.pages_totales.push(i+1);

      
    }
    this.move(1);
}


 move(number_page:number){
  let desde= number_page-1;
  let hasta=desde+4;
  if(hasta<=this.pages_total){
    this.pages=[];
    this.pages=this.pages_totales.slice(desde,hasta);
  }
 
  }

  previus(){
    if(this.number_page>1){
      this.number_page=this.number_page-1;
      this.eventEmmiterChangePage.emit(this.number_page);
       this.move(this.number_page);
    }
 
  }

  next(){
    if(this.number_page< this.pages_total){
      this.number_page=this.number_page+1;
      this.eventEmmiterChangePage.emit(this.number_page);
      this.move(this.number_page);
   }
  }
  cambiarPagina(number_page){
    this.number_page=number_page;
    this.eventEmmiterChangePage.emit(this.number_page);
    this.move(this.number_page);

  }
  first(){
    this.number_page=1;
    this.eventEmmiterChangePage.emit(this.number_page);
    this.move(this.number_page);



  }
  last(){
     this.number_page=this.pages_total;
     this.eventEmmiterChangePage.emit(this.number_page);
     this.move(this.number_page-3);

  }
}
