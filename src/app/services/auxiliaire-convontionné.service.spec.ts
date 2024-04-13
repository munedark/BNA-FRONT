import { TestBed } from '@angular/core/testing';

import { AuxiliaireConvontionnéService } from './auxiliaire-convontionné.service';

describe('AuxiliaireConvontionnéService', () => {
  let service: AuxiliaireConvontionnéService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuxiliaireConvontionnéService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
