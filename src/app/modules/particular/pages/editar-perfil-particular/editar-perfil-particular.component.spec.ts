import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilParticularComponent } from './editar-perfil-particular.component';

describe('EditarPerfilParticularComponent', () => {
  let component: EditarPerfilParticularComponent;
  let fixture: ComponentFixture<EditarPerfilParticularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPerfilParticularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerfilParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
