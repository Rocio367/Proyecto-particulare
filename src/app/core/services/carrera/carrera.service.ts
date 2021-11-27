import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrera } from 'src/app/shared/models/carrera';
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class CarreraService {

    constructor(private http: HttpClient) {}

    obtenerCarrera(): Observable<Carrera[]> {
        return this.http.get<Carrera[]>(`${environment.backUrl}/v1/carreras`);
      }


  }