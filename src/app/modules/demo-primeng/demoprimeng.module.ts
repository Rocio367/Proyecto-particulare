import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import { DemoPrimeNgComponent } from "./components/demoprimeng.component";

@NgModule({
    declarations:[DemoPrimeNgComponent],
    imports:[ CommonModule, RouterModule,ButtonModule,TooltipModule,],
    exports:[],
    schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
  })
  export class DemoPrimeNgModule { }