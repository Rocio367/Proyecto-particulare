import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Alumno } from "src/app/shared/models/alumno";

@Injectable({
  providedIn: "root",
})
export class UsuariosService {
  constructor(private http: HttpClient) { }


  registrarAlumno(alumno: Alumno): Observable<void> {
    return this.http.post<void>(`${environment.backUrl}/v1/alumnos`, alumno);
  }
  obtenerTodos(): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/alumnos/obtenerTodos`);
  }

  obtenerTipoTodos(): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/usuario`);
  }

  bloquear(idUsuario: Number): Observable<any>{
    return this.http.get<void>(`${environment.backUrl}/v1/usuario/Bloquear/${idUsuario}`);
  }

  busquedaPorNombre(nombre: String): Observable<any>{
    return this.http.get<any>(`${environment.backUrl}/v1/usuario/buscador/${nombre}`);
  }
}