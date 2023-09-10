import { TestBed } from '@angular/core/testing';

import { ExchangeOfficeServiceService } from './exchange-office-service.service';

describe('ExchangeOfiiceServiceService', () => {
  let service: ExchangeOfficeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeOfficeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
