import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelo } from 'src/app/shared/models/modelo';
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ModelosService {
  constructor(private http: HttpClient) {}

  subirModelo(modelo: Modelo): Observable<void> {
    return this.http.post<void>(`${environment.backUrl}/v1/modelos`, modelo);
  }
}
