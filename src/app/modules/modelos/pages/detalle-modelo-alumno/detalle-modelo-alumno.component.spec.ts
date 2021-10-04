import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleModeloAlumnoComponent } from './detalle-modelo-alumno.component';

describe('DetalleModeloAlumnoComponent', () => {
  let component: DetalleModeloAlumnoComponent;
  let fixture: ComponentFixture<DetalleModeloAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleModeloAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleModeloAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
