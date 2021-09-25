import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAnotarseComponent } from './modal-anotarse.component';

describe('ModalAnotarseComponent', () => {
  let component: ModalAnotarseComponent;
  let fixture: ComponentFixture<ModalAnotarseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAnotarseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAnotarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
