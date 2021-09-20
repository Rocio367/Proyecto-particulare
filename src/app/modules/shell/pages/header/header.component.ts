import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as $ from 'jquery';
import { GeneralService } from 'src/app/core/services/general/general.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuDefault = false;
  @Output() sidenavToggle = new EventEmitter<void>();
  @Input() menu: any;
  constructor(private general: GeneralService, private route: Router, private router: ActivatedRoute) {
    this.router.params.forEach((params: Params) => {
      params['language'];

       
    });



  }


  ngOnInit(){}
  logout() {

    // document.location.href = 'http://tgnvalvulas.smartworkar.com:8888/ui/#/';

  }

  goToUrl(url: string): void {
    document.location.href = url;
  }

  cerrarContacto() {
    $('.dropdown.contacto').removeClass('show')
  }

  
}
