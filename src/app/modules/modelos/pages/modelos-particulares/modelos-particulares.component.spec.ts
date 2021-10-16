import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModelosParticularesComponent } from './modelos-particulares.component';

describe('ModelosParticularesComponent', () => {
  let component: ModelosParticularesComponent;
  let fixture: ComponentFixture<ModelosParticularesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelosParticularesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelosParticularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
