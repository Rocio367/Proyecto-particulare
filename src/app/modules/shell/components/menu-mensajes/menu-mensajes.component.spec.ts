import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuMensajesComponent } from './menu-mensajes.component';

describe('MenuMensajesComponent', () => {
  let component: MenuMensajesComponent;
  let fixture: ComponentFixture<MenuMensajesComponent>;

  beforeEach(waitForAsync(() => {
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
