import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConsultaRequest } from 'src/app/shared/models/consultaRequest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {


  constructor(private http: HttpClient) {
  }


 
 
  getItemsHeader(language) {
    return this.http.get(`${environment.apiUrl}/api/menu/new-header/?locale=es`).pipe(tap(
      (res: any) => {
        return res;
      })
    );
  }
  getItemsFooter(language) {
    return this.http.get(`${environment.apiUrl}/api/menu/footer/?locale=es`).pipe(tap(
      (res: any) => {
        return res;
      })
    );
  }
 


  postConsulta(datos: ConsultaRequest) {
    return fetch(environment.apiUrl + "/api/contact-mail/contact-form/", {
      method: 'POST',
      body: JSON.stringify(datos),
      //mode: 'no-cors',
      headers: {
        //  'Access-Control-Allow-Credentials': 'true'
      },
      redirect: 'follow'
    });


  }


  buscador(valor: string, page: number): Observable<any> {

    return this.http.get<any>(`${environment.apiUrl}/api/busqueda/?search=${valor}&locale=es&page=${page}&limit=10`).pipe(tap(
      (res: any) => {
        return res;
      })

    );
  }
}
