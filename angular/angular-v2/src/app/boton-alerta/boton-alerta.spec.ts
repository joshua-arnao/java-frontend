import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAlerta } from './boton-alerta';

describe('BotonAlerta', () => {
  let component: BotonAlerta;
  let fixture: ComponentFixture<BotonAlerta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonAlerta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonAlerta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
