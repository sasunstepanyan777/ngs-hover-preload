import { TestBed } from '@angular/core/testing';

import { NgsHoverPreloadService } from './ngs-hover-preload.service';

describe('NgsHoverPreloadService', () => {
  let service: NgsHoverPreloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgsHoverPreloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
