import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Clase } from "src/app/shared/models/clase";
import { environment } from "../../../../environments/environment";
import { Nivel } from 'src/app/shared/models/nivel';
import { FiltroClase } from 'src/app/shared/models/filtrosClase';


@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor(private http: HttpClient) {}

  obtenerBusqueda(nombre: string): Observable<Clase[]> {
    return this.http.get<Clase[]>(`${environment.backUrl}/v1/clases/buscador/${nombre}`);
  }

  obtenerNiveles(): Observable<Nivel[]> {
    return this.http.get<Nivel[]>(`${environment.backUrl}/v1/niveles`);
  }

  obtenerFiltro(clase: FiltroClase): Observable<Clase[]> {
    return this.http.post<Clase[]>(`${environment.backUrl}/v1/clases/filtrar`, clase);
  }
}
