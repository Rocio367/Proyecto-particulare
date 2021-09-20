import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Login } from 'src/app/shared/models/login';
import { User } from 'src/app/shared/models/user';
import { AuthService } from '../../../../core/authentication/auth.service';
import { RedirectService } from '../../../../core/services/redirect/redirect.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _snackBar: MatSnackBar,private router: Router, private authService: AuthService, private form: FormBuilder, private redirectService: RedirectService) {
    this.loginForm = this.form.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    const pass = this.loginForm.get('password').value;
    const user = this.loginForm.get('username').value;
    let login = new Login(user, pass);
    console.log(this.authService.loginSimulator(login))
    if(this.authService.loginSimulator(login)){
      this.authService.setLoggedIn(true)
       this.router.navigate(['/home'])
    }else{
      this.openSnackBar('Usuario o contraseña incorrectas','x')
    }
  }
  Registrarse(){
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
    } else {
      tipo.type = "password";
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
