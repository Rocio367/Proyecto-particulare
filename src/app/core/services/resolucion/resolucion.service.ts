import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Documento } from "src/app/shared/models/documento";
import { Resolucion } from "src/app/shared/models/resolucion";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
export class ServicioDeResolucion {
    constructor(private http: HttpClient) {}

    obtenerArchivosDeUnaResolucion(resolucion: Resolucion): Observable<Documento[]>{
        return this.http.get<Documento[]>(`${environment.backUrl}/v1/resoluciones/${resolucion.id}/archivos`);
    }
}