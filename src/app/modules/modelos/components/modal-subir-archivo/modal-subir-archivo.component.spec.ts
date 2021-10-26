import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalSubirArchivoComponent } from './modal-subir-archivo.component';

describe('ModalAubirArchivoComponent', () => {
  let component: ModalSubirArchivoComponent;
  let fixture: ComponentFixture<ModalSubirArchivoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSubirArchivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSubirArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
