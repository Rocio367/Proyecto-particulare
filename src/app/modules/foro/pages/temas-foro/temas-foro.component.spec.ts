import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TemasForoComponent } from './temas-foro.component';

describe('TemasForoComponent', () => {
  let component: TemasForoComponent;
  let fixture: ComponentFixture<TemasForoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TemasForoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasForoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
