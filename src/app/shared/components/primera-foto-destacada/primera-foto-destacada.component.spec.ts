import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraFotoDestacadaComponent } from './primera-foto-destacada.component';

describe('PrimeraFotoDestacadaComponent', () => {
  let component: PrimeraFotoDestacadaComponent;
  let fixture: ComponentFixture<PrimeraFotoDestacadaComponent>;

  beforeEach(async(() => {
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
