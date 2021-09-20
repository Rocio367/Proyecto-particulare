import { AfterContentChecked, Component, OnInit } from '@angular/core';
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
  rol = ''
  constructor(private authService: AuthService, private redirectService: RedirectService) {
    this.rol = localStorage.getItem('rol');
    console.log(this.rol)
    switch (this.rol) {
      case 'alumno': {
        this.menu.push({ href: 'buscador', title: 'Buscador' })
        this.menu.push({ href: 'perfil', title: 'Perfil' })
        this.menu.push({ href: 'mensajes', title: 'Mensajes' })

        break;
      }
      case 'admin': {
        this.menu.push({ href: 'analisis', title: 'Analisis' })
        this.menu.push({ href: 'usuarios', title: 'Usuarios' })
        break;
      }
      case 'particular': {
        this.menu.push({ href: 'perfil', title: 'Perfil' })
        this.menu.push({ href: 'mensajes', title: 'Mensajes' })
        break;
      }

     default: {
      this.menu.push({ href: 'login', title: 'Login' })
      this.menu.push({ href: 'registrarse', title: 'Registrarse' })
      break;
      }
    }
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


      this.loaded = true;
    }
  }
  cerrarContacto() {
    $('.dropdown.contacto').removeClass('show')
  }
  ngAfterContentChecked(): void {
    this.username = this.authService.getCurrentUser();
    this.getMenu();
  }

  ngOnDestroy() {
    this.loaded = false;
    this.menu = [];
  }
}
