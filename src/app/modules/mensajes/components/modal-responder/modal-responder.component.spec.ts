import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResponderComponent } from './modal-responder.component';

describe('ModalResponderComponent', () => {
  let component: ModalResponderComponent;
  let fixture: ComponentFixture<ModalResponderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalResponderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalResponderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
