import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institucion } from 'src/app/shared/models/institucion';
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class InstitucionService {

    constructor(private http: HttpClient) {}

    obtenerInstitucion(): Observable<Institucion[]> {
        return this.http.get<Institucion[]>(`${environment.backUrl}/v1/instituciones`);
      }


  }