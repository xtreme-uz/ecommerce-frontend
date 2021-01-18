import { TestBed } from '@angular/core/testing';

import { QuantityUnitService } from './quantity-unit.service';

describe('QuantityUnitService', () => {
  let service: QuantityUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuantityUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
