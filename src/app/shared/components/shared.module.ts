import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ModalConsultaComponent } from './modal-consulta/modal-consulta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ModalGeneralComponent } from './modal-general/modal-general.component';
import { CardsGeneralComponent } from './cards-general/cards-general.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarrouselGeneralComponent } from './carrousel-general/carrousel-general.component';
import { PrimeraFotoDestacadaComponent } from './primera-foto-destacada/primera-foto-destacada.component';
import { CarrouselImgComponent } from './carrousel-img/carrousel-img.component';
import { PasosComponent } from './pasos/pasos.component';
import { FormContactoComponent } from './form-contacto/form-contacto.component';
import { ModalAnotarseComponent } from './modal-anotarse/modal-anotarse.component';
import { CardsComunComponent } from './cards-comun/cards-comun.component';
import {CalendarModule} from 'primeng/calendar';
import {ListboxModule} from 'primeng/listbox';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import { UrlSegura } from '../pipes/url-segura';

@NgModule({
  declarations: [
    FormContactoComponent,
    PasosComponent,
    CarrouselImgComponent,
    PrimeraFotoDestacadaComponent,
    CarrouselGeneralComponent,
    ModalConsultaComponent,
    ModalGalleryComponent,
    ModalGeneralComponent,
    CardsGeneralComponent,
    PasosComponent,
    ModalAnotarseComponent,
    CardsComunComponent,
    UrlSegura
  ],
  imports: [
    FieldsetModule,
    ButtonModule,
    ListboxModule,
    CalendarModule,
    FormsModule,
    IvyCarouselModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AngularMaterialModule],
  providers: [],
  exports: [FormContactoComponent,
    PasosComponent,
    CarrouselImgComponent,
    PrimeraFotoDestacadaComponent,
    CarrouselGeneralComponent,
    IvyCarouselModule,
    CardsGeneralComponent,
    ModalGeneralComponent,
    ModalGalleryComponent,
    ModalConsultaComponent,
    ModalAnotarseComponent,
    UrlSegura,
    ],
  entryComponents: [],

})
export class SharedModule {
}
