import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesConfiguracionComponent } from './opciones-configuracion.component';

describe('OpcionesConfiguracionComponent', () => {
  let component: OpcionesConfiguracionComponent;
  let fixture: ComponentFixture<OpcionesConfiguracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcionesConfiguracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcionesConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
