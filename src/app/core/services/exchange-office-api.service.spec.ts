import { TestBed } from '@angular/core/testing';

import { ExchangeOfficeApiService } from './exchange-office-api.service';

describe('ExchangeOfficeApiService', () => {
  let service: ExchangeOfficeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeOfficeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
