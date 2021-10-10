import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeParticularComponent } from './home-particular.component';

describe('HomeParticularComponent', () => {
  let component: HomeParticularComponent;
  let fixture: ComponentFixture<HomeParticularComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeParticularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
