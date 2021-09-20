import {Directive, HostListener, Input} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Directive({
  selector:'[appCloseMenu]'
})
export class CloseMenuDirective {

  @Input('appCloseMenu') sidenav:MatSidenav;

  constructor() {
  }

  @HostListener('click')
  onClick() {
    this.sidenav.close()
      .then(ignored => ignored);
  }
}
