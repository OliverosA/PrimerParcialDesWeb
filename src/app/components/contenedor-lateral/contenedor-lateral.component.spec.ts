import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorLateralComponent } from './contenedor-lateral.component';

describe('ContenedorLateralComponent', () => {
  let component: ContenedorLateralComponent;
  let fixture: ComponentFixture<ContenedorLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorLateralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
