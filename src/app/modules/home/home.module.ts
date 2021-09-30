import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { RouterModule } from '@angular/router';
import { HomeAlumnoComponent } from './components/home-alumno/home-alumno.component';
import { HomeParticularComponent } from './components/home-particular/home-particular.component';
import { HomeAdministradorComponent } from './components/home-administrador/home-administrador.component';
import { HomeGeneralComponent } from './components/home-general/home-general.component';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { IvyGalleryModule } from 'angular-gallery';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CardsProfesorComponent } from './components/cards-profesor/cards-profesor.component';



@NgModule({
  declarations:[ HomeComponent, PaginatorComponent, HomeAlumnoComponent, HomeParticularComponent, HomeAdministradorComponent, HomeGeneralComponent, BuscadorComponent, CardsProfesorComponent],
  imports:[SharedModule, CommonModule, RouterModule,AngularMaterialModule, MatCardModule, MatButtonModule, MatToolbarModule, MatDividerModule],
  exports:[],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],

})
export class HomeModule {
}
