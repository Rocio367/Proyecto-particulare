import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import {registerLocaleData} from '@angular/common';
import localeAr from '@angular/common/locales/es-AR';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {  CookieService  }  from  'ngx-cookie-service' ;
import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { SharedModule } from './shared/components/shared.module';

registerLocaleData(localeAr, 'es-AR');

@NgModule({
  declarations:[AppComponent],
  imports:[BrowserModule, HttpClientModule,FormsModule, CoreModule, SharedModule, AppRoutingModule, BrowserAnimationsModule],
  providers:[
    CookieService,
    {provide:MAT_DATE_LOCALE, useValue:'es-AR'},
    {provide:LOCALE_ID, useValue:'es-AR'}],
  bootstrap:[AppComponent]
})
export class AppModule {
}
