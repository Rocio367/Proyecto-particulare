import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MensajesComponent } from './mensajes.component';

describe('MensajesComponent', () => {
  let component: MensajesComponent;
  let fixture: ComponentFixture<MensajesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
