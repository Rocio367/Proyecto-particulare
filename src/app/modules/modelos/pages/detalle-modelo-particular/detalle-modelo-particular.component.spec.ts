import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleModeloParticularComponent } from './detalle-modelo-particular.component';

describe('DetalleModeloParticularComponent', () => {
  let component: DetalleModeloParticularComponent;
  let fixture: ComponentFixture<DetalleModeloParticularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleModeloParticularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleModeloParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
