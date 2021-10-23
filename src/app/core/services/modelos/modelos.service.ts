import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Documento } from 'src/app/shared/models/documento';
import { Modelo } from 'src/app/shared/models/modelo';
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ModelosService {
  constructor(private http: HttpClient) {}

  subirModelo(modelo: Modelo): Observable<void> {
    return this.http.post<void>(`${environment.backUrl}/v1/modelos`, modelo);
  }

  obtenerModelos(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(`${environment.backUrl}/v1/modelos`);
  }

  obtenerArchivosPorModelo(modelo: Modelo): Observable<Documento[]>{
    return this.http.get<Documento[]>(`${environment.backUrl}/v1/modelos/${modelo.id}/archivos`);
  }
}
