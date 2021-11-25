import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarCompletarHorariosComponent } from './calendar-completar-horarios.component';

describe('CalendarCompletarHorariosComponent', () => {
  let component: CalendarCompletarHorariosComponent;
  let fixture: ComponentFixture<CalendarCompletarHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarCompletarHorariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarCompletarHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
