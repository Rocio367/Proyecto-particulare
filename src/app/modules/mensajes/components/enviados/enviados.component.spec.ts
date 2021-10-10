import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EnviadosComponent } from './enviados.component';

describe('EnviadosComponent', () => {
  let component: EnviadosComponent;
  let fixture: ComponentFixture<EnviadosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
