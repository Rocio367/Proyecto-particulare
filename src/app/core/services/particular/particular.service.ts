import { Particular } from './../../../shared/models/particular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Usuario } from "src/app/shared/models/usuario";


@Injectable({
  providedIn: 'root'
})
export class ParticularService {
  constructor(private http: HttpClient) {
  }

  crearProfesor(profesor: Particular): Observable<void> {
    return this.http.post<void>(`${environment.backUrl}/v1/profesor/Guardar`, profesor);
  }

  editarProfesor(profesor: Particular): Observable<void> {
    return this.http.post<void>(`${environment.backUrl}/v1/profesor/Modificar`, profesor);
  }

  editarPerfil(profesor: Particular): Observable<void> {
    return this.http.post<void>(`${environment.backUrl}/v1/profesor/editarPerfil`, profesor);
  }

  obtenerTodos(): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/profesor/obtenerTodos`);
  }
  
  buscarPorIdProfesor(idUsuario: Number): Observable<Particular>{
    return this.http.get<Particular>(`${environment.backUrl}/v1/profesor/mostrarRegistro/${idUsuario}`);
  }

}
