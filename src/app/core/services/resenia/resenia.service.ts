import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyAaaaRecord } from 'dns';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/shared/models/alumno';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReseniaService {
  constructor(private http: HttpClient) { }


  guardar(resenia): Observable<void> {
    return this.http.post<void>(`${environment.backUrl}/v1/resenia/guardar`, resenia);
  }

  obtenerResenias(id): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/resenia/obtener/${id}`);
  }
  obtenerReseniasDelParticular(id): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/resenia/obtenerPorParticular/${id}`);
  }
  obtenerIdUser(id): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/resenia/obtenerIdUser/${id}`);
  }
}
