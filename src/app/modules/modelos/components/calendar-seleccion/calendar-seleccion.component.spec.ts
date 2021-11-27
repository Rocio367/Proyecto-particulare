import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSeleccionComponent } from './calendar-seleccion.component';

describe('CalendarSeleccionComponent', () => {
  let component: CalendarSeleccionComponent;
  let fixture: ComponentFixture<CalendarSeleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarSeleccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
