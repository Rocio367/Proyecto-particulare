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
import { CalendarComponent } from './calendar/calendar.component';
import { FormContactoComponent } from './form-contacto/form-contacto.component';
import { CalendarCheckComponent } from './calendar-check/calendar-check.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'src/assets/angular-calendar';
import { adapterFactory } from 'src/assets/angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [CalendarCheckComponent,
    FormContactoComponent,
    CalendarComponent,
    PasosComponent,
    CarrouselImgComponent,
    PrimeraFotoDestacadaComponent,
    CarrouselGeneralComponent,
    ModalConsultaComponent,
    ModalGalleryComponent,
    ModalGeneralComponent,
    CardsGeneralComponent,
    PasosComponent],
  imports: [
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    IvyCarouselModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AngularMaterialModule],
  providers: [],
  exports: [FormContactoComponent,
    CalendarComponent,
    PasosComponent,
    CarrouselImgComponent,
    PrimeraFotoDestacadaComponent,
    CarrouselGeneralComponent,
    IvyCarouselModule,
    CardsGeneralComponent,
    ModalGeneralComponent,
    ModalGalleryComponent,
    ModalConsultaComponent],
  entryComponents: [],

})
export class SharedModule {
}
