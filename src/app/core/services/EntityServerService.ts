import {Paginator, Query} from '../../shared/models/query';
import {Observable} from 'rxjs';

export interface EntityServerService<T> {

  find(query:Query, findType:any):Observable<Paginator<T>>;

  save(entity:T, confirmation:boolean):Observable<boolean | T[]>;

  update(entity:T):Observable<boolean | T[]>;

  get(id:number):Observable<T>;

  delete(id:number):Observable<boolean>;
}
