import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsProfesorComponent } from './cards-profesor.component';

describe('CardsProfesorComponent', () => {
  let component: CardsProfesorComponent;
  let fixture: ComponentFixture<CardsProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
