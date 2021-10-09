import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MisModelosAlumnoComponent } from './mis-modelos-alumno.component';

describe('MisModelosAlumnoComponent', () => {
  let component: MisModelosAlumnoComponent;
  let fixture: ComponentFixture<MisModelosAlumnoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MisModelosAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisModelosAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
