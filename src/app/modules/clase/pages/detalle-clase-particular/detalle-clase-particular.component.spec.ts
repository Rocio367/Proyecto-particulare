import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleClaseParticularComponent } from './detalle-clase-particular.component';

describe('DetalleClaseParticularComponent', () => {
  let component: DetalleClaseParticularComponent;
  let fixture: ComponentFixture<DetalleClaseParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleClaseParticularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleClaseParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
