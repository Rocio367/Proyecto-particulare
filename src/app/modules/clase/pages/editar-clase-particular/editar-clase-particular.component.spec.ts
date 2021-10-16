import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarClaseParticularComponent } from './editar-clase-particular.component';

describe('EditarClaseParticularComponent', () => {
  let component: EditarClaseParticularComponent;
  let fixture: ComponentFixture<EditarClaseParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarClaseParticularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarClaseParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
