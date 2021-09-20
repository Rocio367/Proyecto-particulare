import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosGananciasProfesorComponent } from './graficos-ganancias-profesor.component';

describe('GraficosGananciasProfesorComponent', () => {
  let component: GraficosGananciasProfesorComponent;
  let fixture: ComponentFixture<GraficosGananciasProfesorComponent>;

  beforeEach(async(() => {
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
