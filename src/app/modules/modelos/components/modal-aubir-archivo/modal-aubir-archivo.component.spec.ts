import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAubirArchivoComponent } from './modal-aubir-archivo.component';

describe('ModalAubirArchivoComponent', () => {
  let component: ModalAubirArchivoComponent;
  let fixture: ComponentFixture<ModalAubirArchivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAubirArchivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAubirArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
