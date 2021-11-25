import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Clase } from "src/app/shared/models/clase";
import { Materia } from "src/app/shared/models/materia";
import { Nivel } from "src/app/shared/models/nivel";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ClaseService {
  headers = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.headers.set('Content-Length', '<calculated when request is sent>');
  }

  subirClase(clase: Clase): Observable<void> {
    return this.http.post<void>(`${environment.backUrl}/v1/clases`, clase);
  }

  editarClase(clase: any,id): Observable<void> {
    return this.http.post<void>(`${environment.backUrl}/v1/clases/editar/${id}`, clase,{headers: this.headers,observe: 'response'}).pipe(tap(
      (res: any) => {
        return res;
      })
    );
  }
  anotarse(anotarse: any): Observable<void> {
    return this.http.post<void>(`${environment.backUrl}/v1/clases/anotarse`, anotarse,{headers: this.headers,observe: 'response'}).pipe(tap(
      (res: any) => {
        return res;
      })
    );
  }
  eliminarClase(id: number): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/clases/eliminarClase/${id}`);
  }

  obtenerDisponibilidad(id : number): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/clases/obtenerDisponibilidad/${id}`);
  }
  obtenerDisponibilidadModelos(id : number): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/clases/obtenerDisponibilidadModelos/${id}`);
  }
  obtenerMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(`${environment.backUrl}/v1/materias`);
  }

  obtenerNiveles(): Observable<Nivel[]> {
    return this.http.get<Nivel[]>(`${environment.backUrl}/v1/niveles`);
  }

  obtenerTodas(): Observable<Clase[]> {
    return this.http.get<Clase[]>(`${environment.backUrl}/v1/clases`);
  }

  obtenerClasesPorParticular(idParticular: Number): Observable<Clase[]> {
    return this.http.get<Clase[]>(`${environment.backUrl}/v1/clases/misClases/${idParticular}`);
  }


  obtenerClasesPorAlumno(idAlumno: Number): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/clases/misClasesAlumno/${idAlumno}`);
  }

  verDetalle(id: number): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/clases/verDetalle/${id}`);
  }

  claseIniciada(id: number, link :string): Observable<Clase> {
    return this.http.post<Clase>(`${environment.backUrl}/v1/clases/claseIniciada/${id}`,{link:link});
  }



  claseFinalizada(id: number): Observable<Clase> {
    return this.http.get<Clase>(`${environment.backUrl}/v1/clases/claseFinalizada/${id}`);
  }

  detalleClase(id: number): Observable<Clase> {
    return this.http.get<Clase>(`${environment.backUrl}/v1/clases/detalleClase/${id}`);
  }

  participantes(id: number): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/clases/participantes/${id}`);
  }
  compras(id: number): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/clases/compras/${id}`);
  }
  estado(id: number): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/clases/estado/${id}`);
  }
}
