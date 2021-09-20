import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarParticularComponent } from './registrar-particular.component';

describe('RegistrarParticularComponent', () => {
  let component: RegistrarParticularComponent;
  let fixture: ComponentFixture<RegistrarParticularComponent>;

  beforeEach(async(() => {
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
