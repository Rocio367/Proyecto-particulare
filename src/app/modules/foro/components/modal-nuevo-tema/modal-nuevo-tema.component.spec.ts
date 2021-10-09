import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalNuevoTemaComponent } from './modal-nuevo-tema.component';

describe('ModalNuevoTemaComponent', () => {
  let component: ModalNuevoTemaComponent;
  let fixture: ComponentFixture<ModalNuevoTemaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNuevoTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNuevoTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
