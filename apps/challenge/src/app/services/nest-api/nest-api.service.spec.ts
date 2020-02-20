import { TestBed } from '@angular/core/testing';

import { NestApiService } from './nest-api.service';

describe('NestApiService', () => {
  let service: NestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
