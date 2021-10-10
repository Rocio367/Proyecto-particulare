import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecibidosComponent } from './recibidos.component';

describe('RecibidosComponent', () => {
  let component: RecibidosComponent;
  let fixture: ComponentFixture<RecibidosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecibidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
