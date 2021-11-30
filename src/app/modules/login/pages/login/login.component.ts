import { LoginService } from './../../../../core/services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/models/login';
import { AuthService } from '../../../../core/authentication/auth.service';
import { RedirectService } from '../../../../core/services/redirect/redirect.service';
import { Usuario } from './../../../../shared/models/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  passwordVisibility = false;
  usuario: Usuario;
  constructor(private _snackBar: MatSnackBar, private router: Router, private authService: AuthService, private form: FormBuilder,
    private redirectService: RedirectService, private loginService: LoginService,
    public snackBar: MatSnackBar) {
    this.loginForm = this.form.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    });
  }
  ngOnInit() {
  }


  onSubmit() {

    if (this.loginForm.valid) {
      let user: Usuario;
      user = {
        nombre: null,
        apellido: null,
        telefono: null,
        email: this.loginForm.get('username').value,
        contrasenia: this.loginForm.get('password').value,
        fechaNacimiento: null,
        fotoPerfil: null,
        documento: null,
        rol: null,
        id: null
      }


      this.loginService.login(user)
        .subscribe(
          (usuario) => {
            this.usuario = usuario;       
            //variables de sesion
            localStorage.setItem('rol',usuario.rol)
            localStorage.setItem('idUser',usuario.id)
            localStorage.setItem('name',usuario.nombre + ' ' +usuario.apellido )
            localStorage.setItem('recargar_menu', JSON.stringify(true));
            this.router.navigate(['/home'])
          },
          (error) => {
            console.error(user, error);
            this.snackBar.open(localStorage.getItem('errorMensaje'), "", {
              duration: 1500,
              horizontalPosition: "end",
              verticalPosition: "top",
            });
            localStorage.setItem('recargar_menu', JSON.stringify(true));
          });
    }
  }


  onSubmitRo() {
    const pass = this.loginForm.get('password').value;
    const user = this.loginForm.get('username').value;
    let login = new Login(user, pass, 0);
    if (this.authService.loginSimulatorRo(login)) {
      localStorage.setItem('recargar_menu', JSON.stringify(true));
      this.router.navigate(['/home'])
    } else {
      this.openSnackBar('Usuario, contraseña incorrectas o usuario bloqueado', 'x')
    }
  }

  Registrarse() {
    this.router.navigate(['registrarse'])
  }
  getUsename() {
    return this.loginForm.get('username');
  }

  getPassword() {
    return this.loginForm.get('password');
  }


  mostrarPass() {
    var tipo: any = document.getElementById("password");
    if (tipo.type == "password") {
      tipo.type = "text";
      this.passwordVisibility = true;
    } else {
      tipo.type = "password";
      this.passwordVisibility = false;

    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, "", {
      duration: 1500,
      horizontalPosition: "end",
      verticalPosition: "top",
      panelClass: ['green-snackbar']
    });
  }
}
