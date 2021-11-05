import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clase } from 'src/app/shared/models/clase';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZoomService {

  constructor(private http: HttpClient) {}

  prueba(): Observable<any> {
    return this.http.get<any>(`${environment.backUrl}/v1/zoom/prueba`);
  }
}
