import { TestBed } from '@angular/core/testing';

import { FormeAffectationService } from './forme-affectation.service';

describe('FormeAffectationService', () => {
  let service: FormeAffectationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormeAffectationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
