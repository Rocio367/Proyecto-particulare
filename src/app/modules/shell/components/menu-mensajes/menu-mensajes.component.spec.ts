import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMensajesComponent } from './menu-mensajes.component';

describe('MenuMensajesComponent', () => {
  let component: MenuMensajesComponent;
  let fixture: ComponentFixture<MenuMensajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMensajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
