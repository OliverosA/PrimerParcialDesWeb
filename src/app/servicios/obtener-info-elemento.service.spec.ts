import { TestBed } from '@angular/core/testing';

import { ObtenerInfoElementoService } from './obtener-info-elemento.service';

describe('ObtenerInfoElementoService', () => {
  let service: ObtenerInfoElementoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerInfoElementoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
