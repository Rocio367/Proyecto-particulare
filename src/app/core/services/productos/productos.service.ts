import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProcesoDeCompra } from "src/app/shared/models/proceso-de-compra";
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
  })
export class ProductosService {
    private urlBase: string;
    private path: string = "/v1/productos";
    headers = new HttpHeaders();

    constructor(private http: HttpClient) {
        this.urlBase = environment.backUrl + this.path;
        this.headers.set('Content-Length', '<calculated when request is sent>');
        this.headers.set('Content-Type', 'application/json');

    }
   
  

    // Por ahora producto de compra solo tiene el id del alumno
    // {
    //  "idAlumno": 1
    // }
    iniciarCompra(producto: any, pedidoDeCompra: any): Observable<ProcesoDeCompra> {
        return this.http.post<ProcesoDeCompra>(`${this.urlBase}/${producto}/compras`, pedidoDeCompra,  {headers : this.headers});
    }

}