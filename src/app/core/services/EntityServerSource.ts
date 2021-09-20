import {BehaviorSubject} from 'rxjs';

export abstract class EntityServerSource<T> {

  protected loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
}
