import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Clase } from "src/app/shared/models/clase";
import { Materia } from "src/app/shared/models/materia";
import { Nivel } from "src/app/shared/models/nivel";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ClaseService {
  constructor(private http: HttpClient) {}

  subirClase(clase: Clase): Observable<void> {
    return this.http.post<void>(`${environment.backUrl}/v1/clases`, clase);
  }

  obtenerMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(`${environment.backUrl}/v1/materias`);
  }

  obtenerNiveles(): Observable<Nivel[]> {
    return this.http.get<Nivel[]>(`${environment.backUrl}/v1/niveles`);
  }

  obtenerTodas(): Observable<Clase[]> {
    return this.http.get<Clase[]>(`${environment.backUrl}/v1/clase`);
  }
}
