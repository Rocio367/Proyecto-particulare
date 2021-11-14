import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared/models/usuario';
import { environment } from "../../../../environments/environment";


@Injectable({
  providedIn: "root",
})
export class LoginService {
  headers = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.headers.set('Content-Length', '<calculated when request is sent>');
  }

  login(usuario: Usuario):  Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.backUrl}/v1/login/login`, usuario);
  }
}
