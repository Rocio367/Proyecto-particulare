import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardsBusquedaComponent } from './cards-busqueda.component';

describe('CardsBusquedaComponent', () => {
  let component: CardsBusquedaComponent;
  let fixture: ComponentFixture<CardsBusquedaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsBusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
