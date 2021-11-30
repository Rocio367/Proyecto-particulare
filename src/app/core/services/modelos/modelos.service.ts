import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActualizarEstadoModeloRequest } from 'src/app/shared/models/actualizarEstadoModeloRequest';
import { Documento } from 'src/app/shared/models/documento';
import { FiltrosModelo } from 'src/app/shared/models/filtrosModelos';
import { Materia } from 'src/app/shared/models/materia';
import { Modelo } from 'src/app/shared/models/modelo';
import { Nivel } from 'src/app/shared/models/nivel';
import { OfertaDeResolucion } from 'src/app/shared/models/oferta-de-resolucion';
import { OfertaDeResolucionResponse } from 'src/app/shared/models/oferta-resolucion-response';
import { Resolucion } from 'src/app/shared/models/resolucion';
import { SolucionDeModeloRequest } from 'src/app/shared/models/solucion-de-modelo-request';
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
  buscarModelosAlumno(filtros: FiltrosModelo):  Observable<Modelo[]> {
    return this.http.post<Modelo[]>(`${environment.backUrl}/v1/modelos/BuscarModelosAlumno`, filtros);
  }
  buscarMisModelosAlumno(filtros: FiltrosModelo):  Observable<Modelo[]> {
    return this.http.post<Modelo[]>(`${environment.backUrl}/v1/modelos/BuscarMisModelosAlumno`, filtros);
  }

  buscarModelosParticular(filtros: FiltrosModelo):  Observable<Modelo[]> {
    return this.http.post<Modelo[]>(`${environment.backUrl}/v1/modelos/BuscarModelosParticular`, filtros);
  }

  buscarMisModelosParticular(filtros: FiltrosModelo):  Observable<Modelo[]> {
    return this.http.post<Modelo[]>(`${environment.backUrl}/v1/modelos/BuscarMisModelosParticular`, filtros);
  }
  // ¿Lo movemos a MateriasService?
  obtenerMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(`${environment.backUrl}/v1/materias`);
  }
 // ¿Lo movemos a PostulacionesService?
    obtenerPostulacionesPorModelo(id): Observable<OfertaDeResolucionResponse[]> {
      console.log(`${environment.backUrl}/v1/modelos/obtenerPostulaciones/`+ id)
      return this.http.get<any>(`${environment.backUrl}/v1/modelos/obtenerPostulaciones/` + id);
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

  obtenerModeloPorId(idModelo: Number): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/modelos/${idModelo}`);
  }

  resolverModelo(solucionDeModeloRequest: SolucionDeModeloRequest): Observable<Resolucion> {
    return this.http.post<Resolucion>(`${environment.backUrl}/v1/modelos/${solucionDeModeloRequest.idModelo}/resoluciones`, solucionDeModeloRequest);
  }

  actualizarEstadoModelo(actualizarEstadoModeloRequest: ActualizarEstadoModeloRequest): Observable<Modelo> {
    return this.http.put<Modelo>(`${environment.backUrl}/v1/modelos/${actualizarEstadoModeloRequest.idModelo}`, actualizarEstadoModeloRequest);
  }
  obtenerResolucionPorModelo(idModelo: Number): Observable<Resolucion[]> {
    return this.http.get<Resolucion[]>(`${environment.backUrl}/v1/modelos/${idModelo}/resoluciones`);
  }
}
