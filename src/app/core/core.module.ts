import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShellModule} from '../modules/shell/shell.module';
import {ShellRoutingModule} from '../modules/shell/shell-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { BusquedaModule } from '../modules/busqueda/busqueda.module';
import { BusquedaRoutingModule } from '../modules/busqueda/busqueda-routing.module';
import { SharedModule } from '../shared/components/shared.module';
import { ClaseRoutingModule } from '../modules/clase/clase-routing.module';
import { ClaseModule } from '../modules/clase/clase.module';
import { ParticularRoutingModule } from '../modules/particular/particular-routing.module';
import { AlumnoRoutingModule } from '../modules/alumno/alumno-routing.module';
import { AdministradorRoutingModule } from '../modules/administrador/administrador-routing.module';
import { ParticularModule } from '../modules/particular/particular.module';
import { AlumnoModule } from '../modules/alumno/alumno.module';
import { AdministradorModule } from '../modules/administrador/administrador.module';
import { HomeModule } from '../modules/home/home.module';
import { HomeRoutingModule } from '../modules/home/home-routing.module';
import { LoginRoutingModule } from '../modules/login/login-routing.module';
import { LoginModule } from '../modules/login/login.module';

@NgModule({
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  imports:[
    CommonModule, 
    BrowserAnimationsModule, 
    ShellRoutingModule,
    BusquedaRoutingModule,
    SharedModule,
    ClaseRoutingModule,
    ParticularRoutingModule,
    AlumnoRoutingModule,
    AdministradorRoutingModule,
    HomeRoutingModule,
    LoginRoutingModule


   ],
   
  exports:[
    ShellModule,
    BusquedaModule,
    ClaseModule,
    ParticularModule,
    AlumnoModule,
    AdministradorModule,
    HomeModule,
    LoginModule


  ],
   
  declarations: []
})
export class CoreModule {
}
