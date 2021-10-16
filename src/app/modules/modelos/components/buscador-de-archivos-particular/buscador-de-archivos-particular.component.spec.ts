import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BuscadorDeArchivosParticularComponent } from './buscador-de-archivos-particular.component';

describe('BuscadorDeArchivosParticularComponent', () => {
  let component: BuscadorDeArchivosParticularComponent;
  let fixture: ComponentFixture<BuscadorDeArchivosParticularComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorDeArchivosParticularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorDeArchivosParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
