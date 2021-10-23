import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalAubirArchivoComponent } from './modal-subir-archivo.component';

describe('ModalAubirArchivoComponent', () => {
  let component: ModalAubirArchivoComponent;
  let fixture: ComponentFixture<ModalAubirArchivoComponent>;

  beforeEach(waitForAsync(() => {
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
