import { Particular } from './../../../shared/models/particular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ParticularService {
  constructor(private http: HttpClient) {
  }

  crearProfesor(profesor: Particular): Observable<void> {
    return this.http.post<void>(`${environment.backUrl}/v1/profesor/Guardar`, profesor);
  }

}
