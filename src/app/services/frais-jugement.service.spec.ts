import { TestBed } from '@angular/core/testing';

import { FraisJugementService } from './frais-jugement.service';

describe('FraisJugementService', () => {
  let service: FraisJugementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraisJugementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
