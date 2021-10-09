import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeAdministradorComponent } from './home-administrador.component';

describe('HomeAdministradorComponent', () => {
  let component: HomeAdministradorComponent;
  let fixture: ComponentFixture<HomeAdministradorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
