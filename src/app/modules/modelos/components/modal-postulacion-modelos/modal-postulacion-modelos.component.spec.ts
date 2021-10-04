import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPostulacionModelosComponent } from './modal-postulacion-modelos.component';

describe('ModalPostulacionModelosComponent', () => {
  let component: ModalPostulacionModelosComponent;
  let fixture: ComponentFixture<ModalPostulacionModelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPostulacionModelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPostulacionModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
