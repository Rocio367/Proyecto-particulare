import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosParticularComponent } from './comentarios-particular.component';

describe('ComentariosParticularComponent', () => {
  let component: ComentariosParticularComponent;
  let fixture: ComponentFixture<ComentariosParticularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariosParticularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
