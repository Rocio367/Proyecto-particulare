import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeGeneralComponent } from './home-general.component';

describe('HomeGeneralComponent', () => {
  let component: HomeGeneralComponent;
  let fixture: ComponentFixture<HomeGeneralComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
