import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';
import { MensajesService } from 'src/app/core/services/mensajes/mensajes.service';
import { AuthService } from '../../../../core/authentication/auth.service';
import { RedirectService } from '../../../../core/services/redirect/redirect.service';


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
  idUser = localStorage.getItem('idUser');;
  items: MenuItem[];
  constructor(private MensajeServices: MensajesService, private authService: AuthService, private router: Router, private redirectService: RedirectService) {
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
    window.location.reload()
  }

  login() {
    localStorage.setItem('recargar_menu', JSON.stringify(false));
    this.redirectService.toLogin();
  }

  register() {
    this.redirectService.toRegister();
  }

  ngAfterContentChecked(): void {
    /*  var iconMensaje = $('.pi-envelope');
      if (iconMensaje.find('#badge').length === 0 ) {
        let numberNoLeidos = '';
        this.MensajeServices.checkearMensajesNoLeidos(this.idUser).subscribe(res => {
          console.log(res)
          numberNoLeidos = res
          iconMensaje.append($('<span id="badge">' + numberNoLeidos + '</span>'));
  
        })
      }*/
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
    // this.rol='admin'
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
            items: [
              {
                label: 'Nuevo mensaje',
                icon: 'pi pi-fw pi-pencil',
                routerLink: 'nuevo-mensaje',

              },
              {
                label: 'Recibidos',
                icon: 'pi pi-fw pi-window-minimize',
                routerLink: 'recibidos'

              },
              {
                label: 'Enviados',
                icon: 'pi pi-fw pi-window-maximize',
                routerLink: 'enviados'

              },
              {
                label: 'Papelera',
                icon: 'pi pi-fw pi-trash',
                routerLink: 'papelera'

              }

            ]
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

            label: 'Mis clases',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Pendientes',
                icon: 'pi pi-fw pi-file-o',
                routerLink: 'mis-clases-alumno'

              },
              {
                label: 'Todas',
                icon: 'pi pi-fw pi-folder',
                routerLink: 'historial-alumno'
              }

            ]
          },

          /* {
             label: 'Foro',
             icon: 'pi pi-fw pi-comments',
              items:[
                {
               label: 'Nuevo tema',
               icon: 'pi pi-fw pi-comment',
               routerLink: 'nuevo-tema'
 
             },
             {
               label: 'Explorar temas',
               icon: 'pi pi-fw pi-tags',
               routerLink: 'temas-foro',
 
             }]
           },*/
        ];
        break;
      }
      case 'administrador': {
        this.items = [

          {
            label: 'Usuarios',
            icon: 'pi pi-fw pi-users',
            routerLink: 'home'

          },
          {
            label: 'Análisis',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: 'ganancias-administrador'

          },

          /* {
             label: 'Foro',
             icon: 'pi pi-fw pi-comments',
             routerLink:'temas-foro'
     
             //  items:[]
           },*/
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
                routerLink: 'mi-perfil-particular'

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
            items: [
              {
                label: 'Nuevo mensaje',
                icon: 'pi pi-fw pi-pencil',
                routerLink: 'nuevo-mensaje',

              },
              {
                label: 'Recibidos',
                icon: 'pi pi-fw pi-window-minimize',
                routerLink: 'recibidos'

              },
              {
                label: 'Enviados',
                icon: 'pi pi-fw pi-window-maximize',
                routerLink: 'enviados'

              },
              {
                label: 'Papelera',
                icon: 'pi pi-fw pi-trash',
                routerLink: 'papelera'

              }

            ]
          },
          {
            label: 'Modelos',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Buscar modelos',
                icon: 'pi pi-fw pi-search',
                routerLink: 'buscar-modelos-particular'

              },
              {
                label: 'Mis postulaciones',
                icon: 'pi pi-fw pi-folder',
                routerLink: 'mis-modelos-particular'

              }

            ]
          },
          {

            label: 'Clases',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Nueva clase',
                icon: 'pi pi-fw pi-file-o',
                routerLink: 'crear-clase'

              },
              {
                label: 'Mis clases',
                icon: 'pi pi-fw pi-folder',
                routerLink: 'ver-clase-particular'
              }

            ]
          },
          {
            label: 'Ganancias',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: 'ganancias-particular'

          },
          /* {
             label: 'Foro',
             icon: 'pi pi-fw pi-comments',
              items:[
                {
               label: 'Nuevo tema',
               icon: 'pi pi-fw pi-folder',
               routerLink: 'nuevo-tema'
 
             },
             {
               label: 'Explorar temas',
               icon: 'pi pi-fw pi-folder',
               routerLink: 'temas-foro',
 
             }]
           },*/

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
