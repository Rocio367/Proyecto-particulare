import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoContratarComponent } from './pago-contratar.component';

describe('PagoContratarComponent', () => {
  let component: PagoContratarComponent;
  let fixture: ComponentFixture<PagoContratarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoContratarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoContratarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
