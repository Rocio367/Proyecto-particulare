import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoGananciasAdministradorComponent } from './grafico-ganancias-administrador.component';

describe('GraficoGananciasAdministradorComponent', () => {
  let component: GraficoGananciasAdministradorComponent;
  let fixture: ComponentFixture<GraficoGananciasAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoGananciasAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoGananciasAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
