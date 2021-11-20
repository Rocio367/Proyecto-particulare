import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisClasesPendientesAlumnoComponent } from './mis-clases-pendientes-alumno.component';

describe('MisClasesPendientesAlumnoComponent', () => {
  let component: MisClasesPendientesAlumnoComponent;
  let fixture: ComponentFixture<MisClasesPendientesAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisClasesPendientesAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisClasesPendientesAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
