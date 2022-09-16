import { TestBed } from '@angular/core/testing';

import { TvserverService } from './tvserver.service';

describe('TvserverService', () => {
  let service: TvserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
