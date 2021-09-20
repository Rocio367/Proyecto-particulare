import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDeUsuariosComponent } from './control-de-usuarios.component';

describe('ControlDeUsuariosComponent', () => {
  let component: ControlDeUsuariosComponent;
  let fixture: ComponentFixture<ControlDeUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlDeUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDeUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
