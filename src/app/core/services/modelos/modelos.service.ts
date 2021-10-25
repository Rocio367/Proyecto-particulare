import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Documento } from 'src/app/shared/models/documento';
import { Materia } from 'src/app/shared/models/materia';
import { Modelo } from 'src/app/shared/models/modelo';
import { Nivel } from 'src/app/shared/models/nivel';
import { OfertaDeResolucion } from 'src/app/shared/models/pedido-postulacion';
import { TipoDeDemora } from 'src/app/shared/models/tipo-de-demora';
import { TipoDeResolucion } from 'src/app/shared/models/tipo-de-resolucion';
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

  ofertarResolucion(ofertaDeResolucion: OfertaDeResolucion, idModelo: Number): Observable<void> {
    return this.http.post<void>(`${environment.backUrl}/v1/modelos/${idModelo}/ofertasDeResoluciones`, ofertaDeResolucion);
  }

  // ¿Lo movemos a MateriasService?
  obtenerMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(`${environment.backUrl}/v1/materias`);
  }

  // ¿Lo movemos a NivelesServices?
  obtenerNiveles(): Observable<Nivel[]> {
    return this.http.get<Nivel[]>(`${environment.backUrl}/v1/niveles`);
  }

  // ¿Lo movemos a TipoDeResolucionService?
  obtenerTiposDeResolucion(): Observable<TipoDeResolucion[]> {
    return this.http.get<TipoDeResolucion[]>(`${environment.backUrl}/v1/tiposDeResoluciones`);
  }

  // ¿Lo movemos a DemoraService?
  obtenerTiposDeDemora(): Observable<TipoDeDemora[]> {
    return this.http.get<TipoDeDemora[]>(`${environment.backUrl}/v1/demoras`);
  }
}
