import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnnoService {
  constructor(private http: HttpClient) {
  }

   
  buscarPorId(idUsuario: Number): Observable<any>{
    return this.http.get<any>(`${environment.backUrl}/v1/alumnos/mostrarRegistro/${idUsuario}`);
  }
}
