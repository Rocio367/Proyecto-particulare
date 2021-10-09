import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModelosAlumnoComponent } from './modelos-alumno.component';

describe('ModelosAlumnoComponent', () => {
  let component: ModelosAlumnoComponent;
  let fixture: ComponentFixture<ModelosAlumnoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelosAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelosAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
