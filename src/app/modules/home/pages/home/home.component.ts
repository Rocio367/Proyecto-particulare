import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rol: string
  constructor() {
    this.rol = localStorage.getItem('rol')
   
  }


  ngOnInit(): void {
   
  }

}
