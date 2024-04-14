import { TestBed } from '@angular/core/testing';

import { OperationConsultationService } from './operation-consultation.service';

describe('OperationConsultationService', () => {
  let service: OperationConsultationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationConsultationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
