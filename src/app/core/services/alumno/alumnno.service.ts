import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alumno } from "src/app/shared/models/alumno";
import { Documento } from 'src/app/shared/models/documento';

@Injectable({
  providedIn: 'root'
})
export class AlumnnoService {
  constructor(private http: HttpClient) {
  }
   
  buscarPorId(idUsuario: Number): Observable<any>{
    return this.http.get<any>(`${environment.backUrl}/v1/alumnos/mostrarRegistro/${idUsuario}`);
  }

  editarAlumno(alumno: Alumno): Observable<void> {
    return this.http.post<void>(`${environment.backUrl}/v1/alumnos/modificar`, alumno);
  }

  obtenerFotoPerfilPorUsuario(idUsuario: Number): Observable<Documento[]>{
    return this.http.get<Documento[]>(`${environment.backUrl}/v1/alumnos/fotoPerfil/${idUsuario}`);
  }

}
