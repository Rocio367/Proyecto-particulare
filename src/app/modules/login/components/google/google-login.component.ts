import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})
export class GoogleLoginComponent implements OnInit{

    googleProvider = GoogleLoginProvider.PROVIDER_ID;
    user: SocialUser;
    constructor(private authService: SocialAuthService,
                private router: Router) { }

    login(provider){
        this.authService.signIn(provider);
    }
    ngOnInit() {
        this.authService.authState.subscribe((user) => {
          if (user) {
              this.router.navigate(['home']);
          }
        });
      }
}