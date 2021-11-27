import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosParticularComponent } from './horarios-particular.component';

describe('HorariosParticularComponent', () => {
  let component: HorariosParticularComponent;
  let fixture: ComponentFixture<HorariosParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorariosParticularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorariosParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
