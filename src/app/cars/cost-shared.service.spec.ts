import { TestBed } from '@angular/core/testing';

import { CostSharedService } from './cost-shared.service';

describe('CostSharedService', () => {
  let service: CostSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
