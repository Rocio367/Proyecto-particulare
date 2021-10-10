import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalValorarComponent } from './modal-valorar.component';

describe('ModalValorarComponent', () => {
  let component: ModalValorarComponent;
  let fixture: ComponentFixture<ModalValorarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalValorarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalValorarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
