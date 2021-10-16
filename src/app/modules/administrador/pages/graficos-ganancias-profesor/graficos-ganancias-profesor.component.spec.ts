import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GraficosGananciasProfesorComponent } from './graficos-ganancias-profesor.component';

describe('GraficosGananciasProfesorComponent', () => {
  let component: GraficosGananciasProfesorComponent;
  let fixture: ComponentFixture<GraficosGananciasProfesorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficosGananciasProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficosGananciasProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
