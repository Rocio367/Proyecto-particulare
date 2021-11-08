import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfiHeaderComponent } from './perfi-header.component';

describe('PerfiHeaderComponent', () => {
  let component: PerfiHeaderComponent;
  let fixture: ComponentFixture<PerfiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfiHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
