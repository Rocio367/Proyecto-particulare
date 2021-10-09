import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BuscadorDeArchivosComponent } from './buscador-de-archivos.component';

describe('BuscadorDeArchivosComponent', () => {
  let component: BuscadorDeArchivosComponent;
  let fixture: ComponentFixture<BuscadorDeArchivosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorDeArchivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorDeArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
