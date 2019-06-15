import { TestBed } from '@angular/core/testing';

import { YachincalService } from './yachincal.service';

describe('YachincalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YachincalService = TestBed.get(YachincalService);
    expect(service).toBeTruthy();
  });
});
