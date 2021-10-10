import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PerfilParticularComponent } from './perfil-particular.component';

describe('PerfilParticularComponent', () => {
  let component: PerfilParticularComponent;
  let fixture: ComponentFixture<PerfilParticularComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilParticularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
