import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMisClasesParticularComponent } from './ver-mis-clases-particular.component';

describe('VerMisClasesParticularComponent', () => {
  let component: VerMisClasesParticularComponent;
  let fixture: ComponentFixture<VerMisClasesParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMisClasesParticularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMisClasesParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
