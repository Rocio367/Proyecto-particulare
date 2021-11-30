import { DatosAcademicos } from './../../../shared/models/datosAcademicos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Documento } from 'src/app/shared/models/documento';


@Injectable({
  providedIn: 'root'
})

export class DatosAcademicosService {
  constructor(private http: HttpClient) {
  }

  crearDatoAcademico(dato: DatosAcademicos): Observable<void> {
    return this.http.post<void>(`${environment.backUrl}/v1/profesor/DatosAcademicos`, dato);
  }

  borrarDatoAcademico(id: number): Observable<void> {
    return this.http.get<void>(`${environment.backUrl}/v1/clases/eliminarDatoAacademico/${id}`);
  }

  buscarPorIdProfesor(idUsuario: Number): Observable<DatosAcademicos[]>{
    return this.http.get<DatosAcademicos[]>(`${environment.backUrl}/v1/profesor/mostrarDatosAcademicos/${idUsuario}`);
  }
  borrarPorIdProfesor(idDatoAcademico: Number): Observable<void>{
    return this.http.get<void>(`${environment.backUrl}/v1/profesor/eliminarDatoAacademico/${idDatoAcademico}`);
  }

  obtenerArchivoDatoAcademico(idDatoAcademico: Number): Observable<Documento[]>{
    return this.http.get<Documento[]>(`${environment.backUrl}/v1/profesor/archivoDatoAcademico/${idDatoAcademico}`);
  }}
