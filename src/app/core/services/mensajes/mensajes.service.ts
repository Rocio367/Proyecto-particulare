import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clase } from 'src/app/shared/models/clase';
import { MensajePost } from 'src/app/shared/models/mensajePost';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  headers = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.headers.set('Content-Length', '<calculated when request is sent>');
  }

  crearMensaje(mensaje: MensajePost): Observable<void> {
    return this.http.post<void>(`${environment.backUrl}/v1/mensajes/nuevo`, mensaje);
  }
  recibidos(id): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/mensajes/recibidos/${id}`,);
  }
  enviados(id): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/mensajes/enviados/${id}`,);
  }
  eliminados(id): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/mensajes/eliminados/${id}`,);
  }
  getMensaje(id): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/mensajes/obtenerPorId/${id}`,);
  }
  getDetalle(id): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/mensajes/detalle/${id}`,);
  }

  eliminar(id, idUser): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/mensajes/eliminar/${id}/${idUser}`,);
  }

  restaurar(id, idUser): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/mensajes/restaurar/${id}/${idUser}`,);
  }

  marcarMensajeComoLeido(id, idUser): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/mensajes/marcarMensajeComoLeido/${id}/${idUser}`,);
  }

  checkearMensajesNoLeidos(idUser): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/mensajes/checkearMensajesNoLeidos/${idUser}`,);
  }
}
