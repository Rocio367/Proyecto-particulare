import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDescuentosComponent } from './card-descuentos.component';

describe('CardDescuentosComponent', () => {
  let component: CardDescuentosComponent;
  let fixture: ComponentFixture<CardDescuentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDescuentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDescuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
