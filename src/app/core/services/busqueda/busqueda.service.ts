import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Clase } from "src/app/shared/models/clase";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor(private http: HttpClient) {}

  obtenerBusqueda(nombre: string): Observable<Clase[]> {
    return this.http.get<Clase[]>(`${environment.backUrl}/v1/clases/buscador/${nombre}`);
  }
}
