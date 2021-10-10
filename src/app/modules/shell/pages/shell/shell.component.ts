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

  public username: string;
  public loaded = false;
  showFiller = false;
  hidden = false;
  rol = ''
  isLoggedIn = false;
  defaultMenu = true;

  items: any[];
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
    this.items = [];

    switch (this.rol) {
      case 'alumno': {
        this.items = [

          {
            label: 'Perfil',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Ver perfil',
                icon: 'pi pi-fw pi-user-plus',
                routerLink: 'perfil-alumno'

              },
              {
                label: 'Editar perfil',
                icon: 'pi pi-fw pi-user-edit',
                routerLink: 'editar-perfil-alumno'

              }

            ]
          },
          {
            label: 'Mensajes',
            icon: 'pi pi-fw pi-envelope',
            routerLink: 'mensajes'
            // items:[]
          },
          {
            label: 'Modelos',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Subir modelo',
                icon: 'pi pi-fw pi-file-o',
                routerLink: 'nuevo-modelo'

              },
              {
                label: 'Buscar modelos',
                icon: 'pi pi-fw pi-search',
                routerLink: 'buscar-modelos-alumno'

              },
              {
                label: 'Mis modelos',
                icon: 'pi pi-fw pi-folder',
                routerLink: 'mis-modelos-alumno'

              }

            ]
          },
          {
            label: 'Foro',
            icon: 'pi pi-fw pi-comments',
            routerLink: 'temas-foro'

            //  items:[]
          },
        ];
        break;
      }
      case 'admin': {
        this.items = [

          {
            label: 'Usuarios',
            icon: 'pi pi-fw pi-users',
            routerLink: 'nuevo-modelo'

          },
          {
            label: 'Análisis',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: 'ganacias-administrador'

          },
       
          {
            label: 'Foro',
            icon: 'pi pi-fw pi-comments',
            routerLink:'temas-foro'
    
            //  items:[]
          },
        ];
       
        break;
      }
      case 'particular': {
      

        this.items = [

          {
            label: 'Perfil',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Ver perfil',
                icon: 'pi pi-fw pi-user-plus',
                routerLink: 'perfil-particular'

              },
              {
                label: 'Editar perfil',
                icon: 'pi pi-fw pi-user-edit',
                routerLink: 'editar-perfil-particular'

              }

            ]
          },
          {
            label: 'Mensajes',
            icon: 'pi pi-fw pi-envelope',
            routerLink: 'mensajes'
            // items:[]
          },
          {
            label: 'Modelos',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Subir modelo',
                icon: 'pi pi-fw pi-file-o',
                routerLink: 'nuevo-modelo'

              },
              {
                label: 'Buscar modelos',
                icon: 'pi pi-fw pi-search',
                routerLink: 'buscar-modelos-particular'

              },
              {
                label: 'Mis modelos',
                icon: 'pi pi-fw pi-folder',
                routerLink: 'mis-modelos-particular'

              }

            ]
          },
          {
            label: 'Foro',
            icon: 'pi pi-fw pi-comments',
            routerLink: 'temas-foro'

            //  items:[]
          },
        ];
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
    this.items = [];
  }

}
