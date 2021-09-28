import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalValorarComponent } from './modal-valorar.component';

describe('ModalValorarComponent', () => {
  let component: ModalValorarComponent;
  let fixture: ComponentFixture<ModalValorarComponent>;

  beforeEach(async(() => {
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
