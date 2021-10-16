import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MensajeDetalleComponent } from './mensaje-detalle.component';

describe('MensajeDetalleComponent', () => {
  let component: MensajeDetalleComponent;
  let fixture: ComponentFixture<MensajeDetalleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
