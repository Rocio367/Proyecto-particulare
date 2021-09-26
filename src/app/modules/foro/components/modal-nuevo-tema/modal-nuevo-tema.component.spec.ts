import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevoTemaComponent } from './modal-nuevo-tema.component';

describe('ModalNuevoTemaComponent', () => {
  let component: ModalNuevoTemaComponent;
  let fixture: ComponentFixture<ModalNuevoTemaComponent>;

  beforeEach(async(() => {
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
