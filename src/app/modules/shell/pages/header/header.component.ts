import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  menu: any;
  constructor(private general: GeneralService, private route: Router, private router: ActivatedRoute) {
    this.router.params.forEach((params: Params) => {
      params['language'];

      this.general.getItemsHeader(params['language']).subscribe(header => {
        const menu = header.data[0].menu;
        let menu2 = [];
        menu.forEach(parent => {
          let parent2 = Object.assign({}, parent)
          parent2.menuItem = [];
          parent.menuItem.forEach(child => {
            let child2 = Object.assign({}, child)
            var i = 0;
            child2.menuItem = []
            child2.menuItem[0] = []
            child2.menuItem[1] = []

            child.menuItem.forEach(subchild => {
              let subchild2 = Object.assign({}, subchild)
              if (i < 16) {
                child2.menuItem[0].push(subchild2)
              } else {
                child2.menuItem[1].push(subchild2)
              }
              i++;
            });

            parent2.menuItem.push(child2)

          });
          menu2.push(parent2)
        });
        this.menu = menu2;
      })
    });



  }


  ngOnInit() {
    if (window.matchMedia('(max-width: 991px)').matches) {
      jQuery(document).on("click", "li.dropdown-h > a", function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('show');
      });
      jQuery(document).on("click", "li.dropdown > a", function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('show');
      });
    }
    if (window.matchMedia('(min-width: 992px)').matches) {
      jQuery(document).on("click", "li.dropdown > a", function () {
        let show = true;
        if ($(this).parent().hasClass('show')) {
          show = false;
        }
        $('.dropdown.show').removeClass('show')
        if (show) {
          $(this).parent().addClass('show');
        }
        else {
          $(this).parent().removeClass('show');
        }
      });
    }
  }
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive ";
    } else {
      x.className = "topnav";
    }
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }


  buscarWeb() {
    var valor = ((document.getElementById("buscadorWeb") as HTMLInputElement).value);
    this.route.navigate(['busqueda/' + valor])

  }
  buscarMob() {
    var valor = ((document.getElementById("buscadorMob") as HTMLInputElement).value);
    this.route.navigate(['busqueda/' + valor])


  }
  logout() {

    // document.location.href = 'http://tgnvalvulas.smartworkar.com:8888/ui/#/';

  }

  goToUrl(url: string): void {
    document.location.href = url;
  }

  cerrarContacto() {
    $('.dropdown.contacto').removeClass('show')
  }

  primeraMitad(any) {
    var result = [];
    if (any.length > 16) {
      var cant = any.length / 2;
      result = any.slice(0, Math.round(cant))
    } else {
      result = any;
    }
    return result;
  }
  segundaMitad(any) {
    var result = [];
    if (any.length > 16) {
      var cant = any.length / 2;
      result = any.slice(Math.round(cant), Math.round(cant) * 2)
    } else {
      result = null;
    }
    return result;
  }
}
