import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { CardsBusquedaComponent } from './components/cards-busqueda/cards-busqueda.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { MapaComponent } from './components/mapa/mapa.component';
import {OrderListModule} from 'primeng/orderlist';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import {SelectButtonModule} from 'primeng/selectbutton'
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
@NgModule({
  declarations:[BusquedaComponent, CardsBusquedaComponent ,MapaComponent],
  imports:[
    AgmCoreModule.forRoot({
      //key de maps javascript api
      apiKey: environment.keyApiMaps
    }),CalendarModule,DataViewModule,DropdownModule   
    ,CheckboxModule,ButtonModule,ToastModule,SelectButtonModule,CardModule,
    OrderListModule,
    InputTextModule,
    GooglePlaceModule,
     CommonModule,
     SharedModule,
     RouterModule,
     AngularMaterialModule,
     AutocompleteLibModule
    ],
  exports:[],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
})
export class BusquedaModule { }
