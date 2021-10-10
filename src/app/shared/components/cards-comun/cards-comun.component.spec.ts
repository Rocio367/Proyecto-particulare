import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardsComunComponent } from './cards-comun.component';

describe('CardsComunComponent', () => {
  let component: CardsComunComponent;
  let fixture: ComponentFixture<CardsComunComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsComunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
