import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { ForoComponent } from './pages/foro/foro.component';
import { TemasForoComponent } from './pages/temas-foro/temas-foro.component';



@NgModule({
  declarations:[ForoComponent, TemasForoComponent],
  imports:[ CommonModule,SharedModule,RouterModule,AngularMaterialModule, ],
  exports:[],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ForoModule { }
