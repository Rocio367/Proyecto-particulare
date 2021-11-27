import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiHistorialDeClasesAlumnoComponent } from './mi-historial-de-clases-alumno.component';

describe('MiHistorialDeClasesAlumnoComponent', () => {
  let component: MiHistorialDeClasesAlumnoComponent;
  let fixture: ComponentFixture<MiHistorialDeClasesAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiHistorialDeClasesAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiHistorialDeClasesAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
