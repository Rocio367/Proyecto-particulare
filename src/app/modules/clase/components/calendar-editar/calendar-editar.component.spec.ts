import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEditarComponent } from './calendar-editar.component';

describe('CalendarEditarComponent', () => {
  let component: CalendarEditarComponent;
  let fixture: ComponentFixture<CalendarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
