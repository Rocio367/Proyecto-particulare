import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn:'root'
})
export class RedirectService {

  constructor(private router:Router) {
  }
  goToUrl(href:string) {
      this.router.navigate([href]);
  }

  toHome() {
    if(window.location.href== environment.frontUrl || window.location.href== environment.frontUrl+'/' || window.location.href== environment.frontUrl+'/home'){
       window.location.reload();
    }else{
      this.router.navigate([{outlets:{primary:['home']}}])
      .then(ignored => ignored);
    }
   
  }

  toLogin() {
    this.router.navigate([{outlets:{primary:['login'], toolbar:null}}])
      .then(ignored => ignored);
  }
  toRegister() {
    this.router.navigate([{outlets:{primary:['registrarse'], toolbar:null}}])
      .then(ignored => ignored);
  }
  toError(errorMessage) {
    this.router.navigate([{outlets:{primary:['error'], toolbar:null}}], {state:{message:errorMessage}})
      .then(ignored => ignored);
  }

  toNotFound(errorMessage) {
    this.router.navigate([{outlets:{primary:['notFound'], toolbar:null}}], {state:{message:errorMessage}})
      .then(ignored => ignored);
  }

  toList(entity:string) {
    this.router.navigate([{outlets:{primary:[entity], toolbar:[entity]}}])
      .then(ignored => ignored);
  }

  toNew(entity:string, id:number = undefined) {
    let addEntity = '';
    if (id) {
      addEntity += '/' + id.toString();
    }

    this.router.navigate([{outlets:{primary:`${entity}/new${addEntity}`, toolbar:[entity]}}])
      .then(ignored => ignored);
  }

  toEdit(entity:string, id:number) {
    this.router.navigate([{outlets:{primary:`${entity}/edit/${id}`, toolbar:[entity]}}])
      .then(ignored => ignored);
  }

  toView(entity:string, id:number) {
    this.router.navigate([{outlets:{primary:`${entity}/view/${id}`, toolbar:[entity]}}])
      .then(ignored => ignored);
  }
}
