import { TestBed } from '@angular/core/testing';

import { ObtenerEstacionService } from './obtener-estacion.service';

describe('ObtenerEstacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerEstacionService = TestBed.get(ObtenerEstacionService);
    expect(service).toBeTruthy();
  });
});
