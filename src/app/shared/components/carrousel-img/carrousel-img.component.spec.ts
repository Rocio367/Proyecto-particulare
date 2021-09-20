import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselImgComponent } from './carrousel-img.component';

describe('CarrouselImgComponent', () => {
  let component: CarrouselImgComponent;
  let fixture: ComponentFixture<CarrouselImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrouselImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
