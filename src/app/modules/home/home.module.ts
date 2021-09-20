import {NgModule} from '@angular/core';
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



@NgModule({
  declarations:[HomeComponent, PaginatorComponent],
  imports:[ CommonModule, RouterModule,AngularMaterialModule, MatCardModule, MatButtonModule, MatToolbarModule, MatDividerModule],
  exports:[]
})
export class HomeModule {
}
