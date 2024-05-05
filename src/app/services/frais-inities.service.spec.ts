import { TestBed } from '@angular/core/testing';

import { FraisInitiesService } from './frais-inities.service';

describe('FraisInitiesService', () => {
  let service: FraisInitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraisInitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
