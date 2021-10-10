import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDetalleClaseComponent } from './calendar-detalle-clase.component';

describe('CalendarDetalleClaseComponent', () => {
  let component: CalendarDetalleClaseComponent;
  let fixture: ComponentFixture<CalendarDetalleClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarDetalleClaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDetalleClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
