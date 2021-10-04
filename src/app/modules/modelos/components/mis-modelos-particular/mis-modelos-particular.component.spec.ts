import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisModelosParticularComponent } from './mis-modelos-particular.component';

describe('MisModelosParticularComponent', () => {
  let component: MisModelosParticularComponent;
  let fixture: ComponentFixture<MisModelosParticularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisModelosParticularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisModelosParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
