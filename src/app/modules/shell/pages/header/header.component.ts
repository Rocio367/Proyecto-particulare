import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { GeneralService } from 'src/app/core/services/general/general.service';
import { RedirectService } from 'src/app/core/services/redirect/redirect.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuDefault = false;
  @Output() sidenavToggle = new EventEmitter<void>();
  @Input() menu: any;
  @Input() isLoggedIn = false;
  hidden = false;

  constructor(private redirectServices: RedirectService, private authServices: AuthService, private route: Router, private router: ActivatedRoute) {
    this.router.params.forEach((params: Params) => {
      params['language'];
    });

  }


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  ngOnInit() { }

  logout() {
    localStorage.clear();
    localStorage.setItem('recargar_menu', JSON.stringify(false));
    this.redirectServices.toHome()
  }
  mostrar() {
    if (window.location.href.includes('/login') ||
      window.location.href.includes('/registrar')) {
      return false;
    } else {
      return true;
    }

  }
  login() {
    localStorage.setItem('recargar_menu', JSON.stringify(false));
    this.route.navigate(['login'])
  }
  register() {
    this.route.navigate(['registrarse'])
  }
  goToUrl(url: string): void {
    document.location.href = url;
  }

  cerrarContacto() {
    $('.dropdown.contacto').removeClass('show')
  }




}
