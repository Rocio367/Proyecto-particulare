import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clase } from 'src/app/shared/models/clase';
import { Estadisticas } from 'src/app/shared/models/estadisticas';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {
  headers = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.headers.set('Content-Length', '<calculated when request is sent>');
  }

  porCompras(estadisticas: Estadisticas): Observable<any> {
    return this.http.post<any>(`${environment.backUrl}/v1/estadisticas/porCompras`, estadisticas);
  }
  porParticular(estadisticas: Estadisticas,id): Observable<any> {
    return this.http.post<any>(`${environment.backUrl}/v1/estadisticas/porParticular/${id}`, estadisticas);
  }
  porClases(estadisticas: Estadisticas): Observable<any> {
    return this.http.post<any>(`${environment.backUrl}/v1/estadisticas/porClases`, estadisticas);
  }
  porModelo(estadisticas: Estadisticas): Observable<any> {
    return this.http.post<any>(`${environment.backUrl}/v1/estadisticas/porModelo`, estadisticas);
  }
  porModeloClases(estadisticas: Estadisticas): Observable<any> {
    return this.http.post<any>(`${environment.backUrl}/v1/estadisticas/modelosClases`, estadisticas);
  }
  traerParticulares(): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/profesor/todos`);
  }

  //recomendaciones home
  clasesMasPupularesDelMes(): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/estadisticas/clasesMasPupularesDelMes`);
  }
  modelosMasPupularesDelMes(): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/estadisticas/modelosMasPupularesDelMes`);
  }
  agregadosRecientemente(): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/estadisticas/agregadosRecientemente`);
  }
}
