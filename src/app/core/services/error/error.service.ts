import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';

@Injectable({
  providedIn:'root'
})
export class ErrorService {
  mensaje:string;
  status:number;
  constructor(private router:Router) { }

  

  getStatus():number{
    return this.status;
  }

  getMensaje():string{
    return this.mensaje;
  }

  setStatus(n:number){
   this.status=n;
  }
  setMensaje(m:string){
    this.mensaje=m;
  }
}
