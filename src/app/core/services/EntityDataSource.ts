import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {EntityServerService} from './EntityServerService';
import {Paginator, Query} from '../../shared/models/query';
import {finalize} from 'rxjs/operators';


export class EntityDataSource<T> implements DataSource<T> {

  private entitiesSubject = new BehaviorSubject<T[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  private totalSizeSubject = new BehaviorSubject<number>(0);
  public totalSize$ = this.totalSizeSubject.asObservable();

  constructor(private entityService:EntityServerService<T>) {
  }

  connect(collectionViewer:CollectionViewer):Observable<T[]> {
    return this.entitiesSubject.asObservable();
  }

  disconnect(collectionViewer:CollectionViewer):void {
    this.entitiesSubject.complete();
    this.loadingSubject.complete();
    this.totalSizeSubject.complete();
  }

  cleanEntitiesSubject() {
    this.entitiesSubject.next(null);
  }

  load(query:Query, findType:any) {
    this.loadingSubject.next(true);

    this.entityService.find(query, findType).pipe(
      finalize(() => this.loadingSubject.next(false))
    ).subscribe((paginator:Paginator<T>) => {
      this.totalSizeSubject.next(paginator.total);
      this.entitiesSubject.next(paginator.entities);
    });
  }
}
