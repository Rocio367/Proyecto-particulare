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
    private path: string = "/v1/clases"; // supongo que apuntaria a productos

    constructor(private http: HttpClient) {
        this.urlBase = environment.backUrl + this.path;
    }

    // Por ahora recibo un objeto variable
    // y apunto al endpoint de clases
    iniciarCompra(producto: any): Observable<ProcesoDeCompra> {
        return this.http.post<ProcesoDeCompra>(`${this.urlBase}/${producto}/pagos`, producto,  {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
    }

}