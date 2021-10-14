import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDetalleClaseParticularComponent } from './calendar-detalle-clase-particular.component';

describe('CalendarDetalleClaseParticularComponent', () => {
  let component: CalendarDetalleClaseParticularComponent;
  let fixture: ComponentFixture<CalendarDetalleClaseParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarDetalleClaseParticularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDetalleClaseParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
