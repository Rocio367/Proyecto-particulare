import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CardsProfesorComponent } from './components/cards-profesor/cards-profesor.component';
import { PrimerosPasosComponent } from './components/primeros-pasos/primeros-pasos.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { CardDescuentosComponent } from './components/card-descuentos/card-descuentos.component';
import {CardModule} from 'primeng/card';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import {DividerModule} from 'primeng/divider';
import {RatingModule} from 'primeng/rating';
import { RecomendacionesComponent } from './components/recomendaciones/recomendaciones.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import {OrderListModule} from 'primeng/orderlist';
import {ToastModule} from 'primeng/toast';
import {SelectButtonModule} from 'primeng/selectbutton'
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations:[ HomeComponent, PaginatorComponent, HomeAlumnoComponent, HomeParticularComponent, HomeAdministradorComponent, HomeGeneralComponent, BuscadorComponent, CardsProfesorComponent,PrimerosPasosComponent, CardDescuentosComponent, LandingPageComponent, RecomendacionesComponent,],
  imports:[RatingModule,DividerModule,CardModule,InputTextModule,ButtonModule,AutoCompleteModule,SharedModule, CommonModule, RouterModule,AngularMaterialModule, MatCardModule, MatButtonModule, MatToolbarModule, MatDividerModule,
    AutocompleteLibModule,GooglePlaceModule,AgmCoreModule,OrderListModule,ToastModule,SelectButtonModule,CheckboxModule,CalendarModule,DataViewModule,DropdownModule,TableModule],
  exports:[],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],

})
export class HomeModule {
}
