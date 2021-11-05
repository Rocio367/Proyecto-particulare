import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Alumno } from "src/app/shared/models/alumno";

@Injectable({
    providedIn: "root",
  })
  export class UsuariosService {
    constructor(private http: HttpClient) {}


    registrarAlumno(alumno: Alumno): Observable<void> {
        return this.http.post<void>(`${environment.backUrl}/v1/alumnos`, alumno);
      }


}