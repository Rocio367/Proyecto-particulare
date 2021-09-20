import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";


@Injectable({
    providedIn:'root'
})
export class ApiServerService {

    constructor(private http:HttpClient) {
    }

    getIsAlive() {
        return this.http.get(`${environment.apiUrl}/v1/isAlive`).pipe(
            map((isAlive:string) => {
                return isAlive;
            })
        );
    }

    isBoolean() {
        return this.http.get(`${environment.apiUrl}/v1/isBoolean`).pipe(
            map((isBoolean:boolean | any) => {
                return isBoolean;
            })
        );
    }
}
