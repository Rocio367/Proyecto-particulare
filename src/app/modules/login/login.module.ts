import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './pages/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { GoogleLoginComponent } from './components/google/google-login.component';


@NgModule({
  declarations:[LoginComponent, RegistrarseComponent, GoogleLoginComponent,],
  imports:[CommonModule, LoginRoutingModule,ReactiveFormsModule, AngularMaterialModule],
  exports:[LoginRoutingModule]
})
export class LoginModule {
}
