import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {Facultad} from '../../../shared/models/facultad';
import {Carrera} from '../../../shared/models/carrera';
import {FacultadCarrera} from '../../../shared/models/facultadCarrera';
import {Estado} from '../../../shared/models/estado';
import {Concepto} from '../../../shared/models/concepto';
import {Tipo} from "../../../shared/models/tipo";
import {Sede} from "../../../shared/models/sede";


@Injectable({
  providedIn:'root'
})
export class UtilsService {

  constructor(private http:HttpClient) {
  }

  findFacultadCarrera():Observable<FacultadCarrera[]> {
    return this.http.get(`${environment.apiUrl}/v1/facultadcarrera/list`).pipe(
      map((facultadCarrera:any[]) => {
        return facultadCarrera.map(facultadCarrera => {
          return new FacultadCarrera(facultadCarrera);
        });
      })
    );
  }

  findFacultades():Observable<Facultad[]> {
    return this.http.get(`${environment.apiUrl}/v1/facultadcarrera/facultades`).pipe(
      map((facultad:any[]) => {
        return facultad.map(facultad => {
          return new Facultad(facultad);
        });
      })
    );
  }

  findTiposCarrera():Observable<Tipo[]> {
    return this.http.get(`${environment.apiUrl}/v1/facultadcarrera/tipo-carreras`).pipe(
      map((tipos:any[]) => {
        return tipos.map(tipo => {
          return new Tipo(tipo);
        });
      })
    );
  }

  findCarrerasByFacultad(facultad:Facultad):Observable<Carrera[]> {
    return this.http.get(`${environment.apiUrl}/v1/facultadcarrera/carreras/facultad/${facultad.id}`).pipe(
      map((carrera:any[]) => {
        return carrera.map(carrera => {
          return new Carrera(carrera);
        });
      })
    );
  }

  findFacultadBySede(sede:Sede):Observable<Facultad[]> {
    return this.http.get(`${environment.apiUrl}/v1/facultadcarrera/facultad/sede/${sede.id}`).pipe(
      map((facultad:any[]) => {
        return facultad.map((facultad => {
          return new Facultad(facultad);
        }))
      })
    )
  }

  findCarrerasByFacultadId(facultadId:number):Observable<Carrera[]> {
    return this.http.get(`${environment.apiUrl}/v1/facultadcarrera/carreras/facultad/${facultadId}`).pipe(
      map((carrera:any[]) => {
        return carrera.map(carrera => {
          return new Carrera(carrera);
        });
      })
    );
  }

  findFacultadCarreraByFacultadAndCarrera(facultad:Facultad, carrera:Carrera):Observable<FacultadCarrera> {
    return this.http.get(`${environment.apiUrl}/v1/facultadcarrera/facultad/${facultad.id}/carrera/${carrera.id}`).pipe(
      map((facultadCarrera:any) => {
          if (!facultadCarrera) {
            throwError('Ha ocurrido un error al encontrar la relación Facultad - Carrera');
          }
          return new FacultadCarrera(facultadCarrera);
        }
      ));
  }

  findEmisionEstados():Observable<Estado[]> {
    return this.http.get(`${environment.apiUrl}/v1/emision/estados`).pipe(
      map((estado:any[]) => {
        return estado.map(estado => {
          return new Estado(estado);
        });
      })
    );
  }

  findConceptos():Observable<Concepto[]> {
    return this.http.get(`${environment.apiUrl}/v1/concepto/all`).pipe(
      map((concepto:any[]) => {
        return concepto.map(concepto => {
          return new Concepto(concepto);
        });
      })
    );
  }

  findSedes():Observable<Sede[]> {
    return this.http.get(`${environment.apiUrl}/v1/facultadcarrera/sedes`).pipe(
      map((sede:any[]) => {
        return sede.map(sede => {
          return new Sede(sede);
        });
      })
    );
  }

  findCarreras():Observable<Carrera[]> {
    return this.http.get(`${environment.apiUrl}/v1/facultadcarrera/carreras`).pipe(
      map((carrera:any[]) => {
        return carrera.map(carrera => {
          return new Carrera(carrera);
        });
      })
    );
  }


  getMetricas(url:string):Observable<object> {
    return this.http.get(`${environment.apiUrl}/v1/` + url).pipe(
      map((metricas:object) => {
        return metricas;
      })
    );
  }
}
