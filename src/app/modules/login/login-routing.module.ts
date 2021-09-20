import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';


const routes:Routes = [
  {path:'login', component:LoginComponent},
  {path:'registrarse', component:RegistrarseComponent}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class LoginRoutingModule {
}
