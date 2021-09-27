import { Route } from '@angular/compiler/src/core';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/authentication/auth.service';
import { RedirectService } from '../../../../core/services/redirect/redirect.service';
import { Menu, MenuItem } from '../../../../shared/models/menu';


@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, AfterContentChecked {

  public menu: any[] = [];
  public username: string;
  public loaded = false;
  showFiller = false;
  hidden = false;
  rol = ''
  isLoggedIn = false;
  defaultMenu = true;

  constructor(private authService: AuthService, private router: Router, private redirectService: RedirectService) {
    this.getMenu()
  }

  ngOnInit() {
  }

  public isAuthenticated() {
    return this.authService.isLoggedIn();
  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  logout() {
    localStorage.clear();
    localStorage.setItem('recargar_menu', JSON.stringify(false));
    this.redirectService.toHome();
  }

  login() {
    localStorage.setItem('recargar_menu', JSON.stringify(false));
    this.redirectService.toLogin();
  }

  register() {
    this.redirectService.toRegister();
  }

  ngAfterContentChecked(): void {

    if (this.loaded === false) {
      this.getMenu();
    }
    if (JSON.parse(localStorage.getItem('recargar_menu'))) {
      this.getMenu();
      localStorage.setItem('recargar_menu', JSON.stringify(false));
    }

  }
  getMenu() {
    this.isLoggedIn = this.authService.isLoggedIn()
    this.rol = localStorage.getItem('rol');

    switch (this.rol) {
      case 'alumno': {
        this.menu.push({ type:'',href: 'perfil-alumno', title: 'Perfil' })
        this.menu.push({ type:'badge',href: 'mensajes', title: 'Mensajes' })
        this.menu.push({ type:'badge',href: 'temas-foro', title: 'Foro' })
        this.menu.push({type:'', href: 'modelos', title: 'Modelos' })


        break;
      }
      case 'admin': {
        this.menu.push({ type:'', href: 'analisis', title: 'Analisis' })
        this.menu.push({type:'',  href: 'usuarios', title: 'Usuarios' })
        break;
      }
      case 'particular': {
        this.menu.push({ type:'badge', href: 'modelos-particular', title: 'Modelos' })
        this.menu.push({ type:'', href: 'perfil', title: 'Perfil' })
        this.menu.push({ type:'badge', href: 'mensajes', title: 'Mensajes' })
        break;
      }

      default: {
        this.defaultMenu = true;

        break;
      }
    }

    this.loaded = true;

  }
  cerrarContacto() {
    $('.dropdown.contacto').removeClass('show')
  }

  mostrar() {
    if (window.location.href.includes('/login') ||
      window.location.href.includes('/registrar')) {
      return false;
    } else {
      return true;
    }
  }

  ngOnDestroy() {
    this.loaded = false;
    this.menu = [];
  }

}
