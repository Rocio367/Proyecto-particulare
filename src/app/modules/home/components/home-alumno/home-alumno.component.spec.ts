import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeAlumnoComponent } from './home-alumno.component';

describe('HomeAlumnoComponent', () => {
  let component: HomeAlumnoComponent;
  let fixture: ComponentFixture<HomeAlumnoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
