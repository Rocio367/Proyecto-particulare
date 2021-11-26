import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../authentication/auth.service';
import {RedirectService} from '../services/redirect/redirect.service';


@Injectable({
  providedIn:'root'
})
export class ParticularGuard implements CanActivate, CanLoad {

  constructor(private authService:AuthService, private redirectService:RedirectService) {
  }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }

  canLoad(route:Route, segments:UrlSegment[]):Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  private checkLogin() {
    if (localStorage.getItem('rol')=='particular') {
        return true;
    }else {
        return false;

    }
}
}
