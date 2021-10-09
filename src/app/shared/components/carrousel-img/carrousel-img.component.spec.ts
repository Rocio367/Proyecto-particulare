import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarrouselImgComponent } from './carrousel-img.component';

describe('CarrouselImgComponent', () => {
  let component: CarrouselImgComponent;
  let fixture: ComponentFixture<CarrouselImgComponent>;

  beforeEach(waitForAsync(() => {
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
