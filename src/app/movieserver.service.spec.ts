import { TestBed } from '@angular/core/testing';

import { MovieserverService } from './movieserver.service';

describe('MovieserverService', () => {
  let service: MovieserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
