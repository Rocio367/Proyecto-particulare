import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {registerLocaleData} from '@angular/common';
import localeAr from '@angular/common/locales/es-AR';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {  CookieService  }  from  'ngx-cookie-service' ;
import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { SharedModule } from './shared/components/shared.module';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider} from 'angularx-social-login';
import { MatCarouselModule } from '@ngmodule/material-carousel';



registerLocaleData(localeAr, 'es-AR');

@NgModule({
  declarations:[AppComponent],
  imports:[BrowserModule, HttpClientModule,FormsModule, CoreModule, SharedModule, AppRoutingModule, BrowserAnimationsModule, SocialLoginModule,MatCarouselModule.forRoot(),],
  providers:[
    CookieService,
    {
      provide:MAT_DATE_LOCALE, 
      useValue:'es-AR'
    },
    {
      provide:LOCALE_ID, 
      useValue:'es-AR'
    },
    { provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '82221627499-6u6omqdmfrkh2u9hi8tjah9a9j9a5gul.apps.googleusercontent.com'
          )
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }
  ],
  bootstrap:[AppComponent]
})
export class AppModule {
}
