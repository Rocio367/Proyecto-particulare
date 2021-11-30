import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {AuthService} from '../authentication/auth.service';
import {catchError, filter, switchMap, take} from 'rxjs/operators';
import {Token} from '../../shared/models/token';
import {RedirectService} from '../services/redirect/redirect.service';
import {environment} from '../../../environments/environment';
import { I } from '@angular/cdk/keycodes';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject:BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authService:AuthService, private redirectService:RedirectService) {
  }

  private static addToken(request:HttpRequest<any>, token:string) {
    return request.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }
    });
  }

  intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {


    const loginUrl = `${environment.apiUrl}/login_check`;
    const refreshTokenUrl = `${environment.apiUrl}/refresh/token`;

    if (localStorage.getItem('token')) {
      request = TokenInterceptor.addToken(request, localStorage.getItem('token'));
    }

    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse) => {
         console.log(error.error)
        let errorMessage;
        if (error.status == 400 && error.error) {
           localStorage.setItem('errorMensaje',error.error)
        }else{
          localStorage.setItem('errorMensaje','Lo sentimos , no se pudo realizar la operación')

        }
        if(error.status == 500){
          console.log(error)
          localStorage.setItem('errorMensaje',error.message)
        }
          if (error.status === 401) {
            if (request.url === refreshTokenUrl) {
              this.authService.removeTokens();
              this.redirectService.toLogin();
              return throwError('Refresh token expired!');
            }

            if (request.url !== loginUrl) {
              return this.handle401Error(request, next);
            }
          }

          // server-side error
          errorMessage = `Error Code:${error.status}\nMessage:${error.message}`;
          if (error.error) {
            if (error.error.error) {
              errorMessage += `\nDetail:${error.error.error}`;
            } else {
              errorMessage += `\nDetail:${error.error}`;
            }
          }
        

        if (error.status === 404) {
          //this.redirectService.toNotFound(errorMessage);
        } else {
         // this.redirectService.toError(errorMessage);
        }

        return throwError(errorMessage);
      }));
  }

  private handle401Error(request:HttpRequest<any>, next:HttpHandler) {
    if (this.isRefreshing) {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(token => {
          return next.handle(TokenInterceptor.addToken(request, token));
        }));
    } else {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((token:Token) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.token);
          return next.handle(TokenInterceptor.addToken(request, token.token));
        }));
    }
  }
}
