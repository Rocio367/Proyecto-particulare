import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrimeraFotoDestacadaComponent } from './primera-foto-destacada.component';

describe('PrimeraFotoDestacadaComponent', () => {
  let component: PrimeraFotoDestacadaComponent;
  let fixture: ComponentFixture<PrimeraFotoDestacadaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeraFotoDestacadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeraFotoDestacadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
