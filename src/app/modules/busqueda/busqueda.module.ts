import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaRoutingModule } from './busqueda-routing.module';
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
@NgModule({
  declarations:[BusquedaComponent, CardsBusquedaComponent ,MapaComponent],
  imports:[
    AgmCoreModule.forRoot({
      //key de maps javascript api
      apiKey: environment.keyApiMaps
    }),
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
