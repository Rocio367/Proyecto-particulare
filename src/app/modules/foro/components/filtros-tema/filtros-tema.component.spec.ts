import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosTemaComponent } from './filtros-tema.component';

describe('FiltrosTemaComponent', () => {
  let component: FiltrosTemaComponent;
  let fixture: ComponentFixture<FiltrosTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrosTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
