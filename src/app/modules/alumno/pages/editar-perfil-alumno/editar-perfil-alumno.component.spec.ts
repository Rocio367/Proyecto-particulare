import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditarPerfilAlumnoComponent } from './editar-perfil-alumno.component';

describe('EditarPerfilAlumnoComponent', () => {
  let component: EditarPerfilAlumnoComponent;
  let fixture: ComponentFixture<EditarPerfilAlumnoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPerfilAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerfilAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
