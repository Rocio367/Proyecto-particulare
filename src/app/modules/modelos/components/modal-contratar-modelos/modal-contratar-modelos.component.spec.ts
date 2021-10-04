import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContratarModelosComponent } from './modal-contratar-modelos.component';

describe('ModalContratarModelosComponent', () => {
  let component: ModalContratarModelosComponent;
  let fixture: ComponentFixture<ModalContratarModelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalContratarModelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContratarModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
