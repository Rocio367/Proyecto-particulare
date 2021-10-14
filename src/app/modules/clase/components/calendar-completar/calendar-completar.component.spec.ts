import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarCompletarComponent } from './calendar-completar.component';

describe('CalendarCompletarComponent', () => {
  let component: CalendarCompletarComponent;
  let fixture: ComponentFixture<CalendarCompletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarCompletarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarCompletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
