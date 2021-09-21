import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { ModalConsultaComponent } from './modal-consulta/modal-consulta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ModalGeneralComponent } from './modal-general/modal-general.component';
import { CardsGeneralComponent } from './cards-general/cards-general.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarrouselGeneralComponent } from './carrousel-general/carrousel-general.component';

@NgModule({
  declarations:[ CarrouselGeneralComponent, ModalConsultaComponent,ModalGalleryComponent, ModalGeneralComponent,CardsGeneralComponent],
  imports:[IvyCarouselModule,CommonModule,FormsModule,BrowserModule,ReactiveFormsModule,AngularMaterialModule],
  providers:[],
  exports:[CarrouselGeneralComponent,IvyCarouselModule,CardsGeneralComponent,ModalGeneralComponent,ModalGalleryComponent,ModalConsultaComponent],
  entryComponents:[]
})
export class SharedModule {
}
