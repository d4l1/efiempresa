import { TestBed } from '@angular/core/testing';

import { ServicioArticulosService } from './servicio-articulos.service';

describe('ServicioArticulosService', () => {
  let service: ServicioArticulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioArticulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
