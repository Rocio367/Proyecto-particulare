import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPerfilParticularComponent } from './mi-perfil-particular.component';

describe('MiPerfilParticularComponent', () => {
  let component: MiPerfilParticularComponent;
  let fixture: ComponentFixture<MiPerfilParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiPerfilParticularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPerfilParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
