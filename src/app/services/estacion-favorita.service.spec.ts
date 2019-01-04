import { TestBed } from '@angular/core/testing';

import { EstacionFavoritaService } from './estacion-favorita.service';

describe('EstacionFavoritaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstacionFavoritaService = TestBed.get(EstacionFavoritaService);
    expect(service).toBeTruthy();
  });
});
