import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Usuario } from "src/app/shared/models/usuario";

@Injectable({
    providedIn: "root",
  })
  export class UsuariosService {
    constructor(private http: HttpClient) {}


    registrarAlumno(usuario: Usuario): Observable<void> {
        return this.http.post<void>(`${environment.backUrl}/v1/usuarios`, usuario);
      }


}