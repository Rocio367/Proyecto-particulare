import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegistrarParticularComponent } from './registrar-particular.component';

describe('RegistrarParticularComponent', () => {
  let component: RegistrarParticularComponent;
  let fixture: ComponentFixture<RegistrarParticularComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarParticularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
