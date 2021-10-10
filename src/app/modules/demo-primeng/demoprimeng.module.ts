import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { DemoPrimeNgComponent } from "./components/demoprimeng.component";

@NgModule({
    declarations:[DemoPrimeNgComponent],
    imports:[ CommonModule, RouterModule,ButtonModule,],
    exports:[],
    schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
  })
  export class DemoPrimeNgModule { }