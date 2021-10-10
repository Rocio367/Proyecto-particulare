import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TablaComponent } from './tabla.component';

describe('TablaComponent', () => {
  let component: TablaComponent;
  let fixture: ComponentFixture<TablaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
