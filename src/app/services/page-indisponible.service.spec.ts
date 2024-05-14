import { TestBed } from '@angular/core/testing';

import { PageIndisponibleService } from './page-indisponible.service';

describe('PageIndisponibleService', () => {
  let service: PageIndisponibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageIndisponibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
