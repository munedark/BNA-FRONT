import { TestBed } from '@angular/core/testing';

import { FraisGenerauxService } from './frais-generaux.service';

describe('FraisGenerauxService', () => {
  let service: FraisGenerauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraisGenerauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
