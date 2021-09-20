import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../core/authentication/auth.service';
import {RedirectService} from '../../../../core/services/redirect/redirect.service';
import {Menu, MenuItem} from '../../../../shared/models/menu';


@Component({
  selector:'app-shell',
  templateUrl:'./shell.component.html',
  styleUrls:['./shell.component.scss']
})
export class ShellComponent implements OnInit, AfterContentChecked {

  public menu:Menu = new Menu();
  public username:string;
  public loaded = false;

  constructor(private authService:AuthService, private redirectService:RedirectService) {
  }

  ngOnInit() {
  }

  public isAuthenticated() {
    return this.authService.isLoggedIn();
  }

  public logout() {
 

        this.redirectService.toLogin();
    
  }

  getMenu() {
    if (this.isAuthenticated() && this.loaded === false) {
      const level2 = new MenuItem('Anexo 3', 'anexo-3', undefined);
     
      
      this.menu.items.push(level2);
    
    
      this.loaded = true;
    }
  }

  ngAfterContentChecked():void {
    this.username = this.authService.getCurrentUser();
    this.getMenu();
  }

  ngOnDestroy() {
    this.loaded = false;
    this.menu.items = [];
  }
}
