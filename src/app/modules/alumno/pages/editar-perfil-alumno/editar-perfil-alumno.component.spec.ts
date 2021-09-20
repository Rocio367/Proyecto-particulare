import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilAlumnoComponent } from './editar-perfil-alumno.component';

describe('EditarPerfilAlumnoComponent', () => {
  let component: EditarPerfilAlumnoComponent;
  let fixture: ComponentFixture<EditarPerfilAlumnoComponent>;

  beforeEach(async(() => {
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
