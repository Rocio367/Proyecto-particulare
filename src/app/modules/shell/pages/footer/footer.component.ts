import {Component, OnInit} from '@angular/core';
import { GeneralService } from 'src/app/core/services/general/general.service';


@Component({
  selector:'app-footer',
  templateUrl:'./footer.component.html',
  styleUrls:['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  menuItem:any;
  lansdingPage=false;
  constructor(private general:GeneralService) {
    this.general.getItemsFooter('es').subscribe(footer=>{
      this.menuItem=footer.data[0].menu[0].menuItem;
    })
  }

  ngOnInit() {
    if(window.location.href.includes('/landing-page')){
      this.lansdingPage=true;
    }else{
      this.lansdingPage=false;
    }
  }
}
