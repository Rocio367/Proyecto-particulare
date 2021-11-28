import { Component, OnInit,Input } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/shared/models/usuario';
import { UsuariosService } from 'src/app/core/services/usuarios/usuarios.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-home-administrador',
  templateUrl: './home-administrador.component.html',
  styleUrls: ['./home-administrador.component.scss']
})
export class HomeAdministradorComponent implements OnInit {
  usuarios: Usuario[] = [];
  @Input() isBloqueado = false;
  @Input() items: MenuItem[];
  buscarText: string;
  valor: string;
  busqueda: string;

  constructor(private router:Router,private aRouter: ActivatedRoute,
    private form: FormBuilder,
    private serviceUsuario: UsuariosService,
    ) {

    }


  ngOnInit(): void {
    this.aRouter.params.subscribe(
      (params: Params) => {
        this.valor = params.q;
        this.buscador(1)
        this.busqueda = this.valor;
        if (this.valor === "undefined") {
          this.busqueda = "";
        }
      }
      
    );
  }

  bloquear(usuario){
     this.serviceUsuario.bloquear(usuario.id).subscribe( 
      (usuarios) => {
        this.ngOnInit();
        Swal.fire(
          'El usuario ha sido bloqueado',
          '',
          'success'
        )   
    },
    (error) => {
      console.error(error);
    }
    );
  }

  desbloquear(usuario){
    this.serviceUsuario.bloquear(usuario.id).subscribe( 
     (usuarios) => {
      this.ngOnInit();
       Swal.fire(
         'El usuario ha sido desbloqueado',
         '',
         'success'
       )   
       
   },
   (error) => {
     console.error(error);
   }
   );
 }

   buscar() {
    this.router.navigate(['home', { q: this.buscarText }])
  }

  buscador(page) {
    this.serviceUsuario.busquedaPorNombre(this.valor).subscribe( 
      (usuarios) => {
        this.usuarios = usuarios;
    },
    (error) => {
      console.error(error);
    }
    );
 
   }
}


