import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilParticularComponent } from './perfil-particular.component';

describe('PerfilParticularComponent', () => {
  let component: PerfilParticularComponent;
  let fixture: ComponentFixture<PerfilParticularComponent>;

  beforeEach(async(() => {
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
