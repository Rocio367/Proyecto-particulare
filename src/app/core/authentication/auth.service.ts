import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, shareReplay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Token } from '../../shared/models/token';
import { environment } from '../../../environments/environment';
import { User } from '../../shared/models/user';
import { Login } from 'src/app/shared/models/login';
import { Usuario } from 'src/app/shared/models/usuario';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private readonly SESSION_USER = 'SESSION_USER';
  // private loggedUser:User = new User();

  constructor(private http: HttpClient) {
  }

  login(user: User): Observable<boolean> {
    return of(true);
    // todo:descomentar cuando este el backend
    /*return this.http.post<Token>(`${environment.apiUrl}/login_check`, user).pipe(
      // tap(tokens => this.doLoginUser(user.username, tokens)),
      shareReplay(),
      tap(tokens => this.storeTokens(tokens)),
      mapTo(true),
      catchError(() => {
        return of(false);
      }));*/
  }

  logout(): Observable<boolean> {
    const refreshToken = new Token();
    refreshToken.refresh_token = this.getRefreshToken();

    return this.http.post<Token>(`${environment.apiUrl}/logout`, refreshToken).pipe(
      // tap(() => this.doLogoutUser()),
      tap(() => this.removeTokens()),
      mapTo(true));
  }

  isLoggedIn() : boolean{
    if(localStorage.getItem('rol')){
      return true;
    }else{
      return false;

    }
  }


  setRol(rol){
    localStorage.setItem('rol',rol)
  }
  setId(id){
    localStorage.setItem('idUser',id)
  }
  getRol(){
   return localStorage.getItem('rol')
  }



  loginSimulatorRo(login :Login){
    let res=false;
    let cuentas:Login[]=[];
    cuentas.push(new Login('admin','admin',3))
    cuentas.push(new Login('alumno','alumno',1))
    cuentas.push(new Login('particular','particular',2))

    cuentas.forEach(l=>{
      if(l.password== login.password && l.username.toLocaleLowerCase() == login.username.toLocaleLowerCase()){
         res=true;
         this.setRol(l.username)
         this.setId(l.id)
      }
    })
    return res;

  }


  loginSimulator(user :Usuario){
    let res=false;
    res=true;
    this.setRol(user.rol)
    this.setId(user.id)
    return res;
  }

  getCurrentUser() {
    return localStorage.getItem(this.SESSION_USER);
  }

  refreshToken() {
    const refreshToken = new Token();
    refreshToken.refresh_token = this.getRefreshToken();

    return this.http.post<Token>(`${environment.apiUrl}/refresh/token`, refreshToken).pipe(
      tap((token: Token) => {
        this.storeJwtToken(token.token);
      }));
  }

  getToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  // private doLoginUser(username:string, token:Token) {
  //   this.loggedUser.username = username;
  //   this.loggedUser.name = token.data.name;
  //   this.storeTokens(token);
  // }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(token: string) {
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  // private doLogoutUser() {
  //   this.loggedUser = new User();
  //   this.removeTokens();
  // }

  private storeTokens(token: Token) {
    localStorage.setItem(this.JWT_TOKEN, token.token);
    localStorage.setItem(this.REFRESH_TOKEN, token.refresh_token);
    localStorage.setItem(this.SESSION_USER, token.data.name);
  }

  public removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
    localStorage.removeItem(this.SESSION_USER);
  }
}
