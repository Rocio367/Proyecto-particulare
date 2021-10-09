import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetalleModeloAlumnoComponent } from './detalle-modelo-alumno.component';

describe('DetalleModeloAlumnoComponent', () => {
  let component: DetalleModeloAlumnoComponent;
  let fixture: ComponentFixture<DetalleModeloAlumnoComponent>;

  beforeEach(waitForAsync(() => {
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
