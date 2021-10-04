import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComunComponent } from './cards-comun.component';

describe('CardsComunComponent', () => {
  let component: CardsComunComponent;
  let fixture: ComponentFixture<CardsComunComponent>;

  beforeEach(async(() => {
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
