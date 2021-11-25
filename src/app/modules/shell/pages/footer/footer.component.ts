import {Component, OnInit} from '@angular/core';


@Component({
  selector:'app-footer',
  templateUrl:'./footer.component.html',
  styleUrls:['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  menuItem:any;
  lansdingPage=false;
  constructor() {
  }

  ngOnInit() {
    if(window.location.href.includes('/landing-page')){
      this.lansdingPage=true;
    }else{
      this.lansdingPage=false;
    }
  }
}
