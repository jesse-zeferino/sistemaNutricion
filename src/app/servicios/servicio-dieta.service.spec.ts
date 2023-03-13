import { TestBed } from '@angular/core/testing';

import { ServicioDietaService } from './servicio-dieta.service';

describe('ServicioDietaService', () => {
  let service: ServicioDietaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDietaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
