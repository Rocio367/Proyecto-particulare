import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeParticularComponent } from './home-particular.component';

describe('HomeParticularComponent', () => {
  let component: HomeParticularComponent;
  let fixture: ComponentFixture<HomeParticularComponent>;

  beforeEach(async(() => {
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
