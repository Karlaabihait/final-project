import { TestBed } from '@angular/core/testing';

import { TokenInterceptorService } from './token-incerceptor.service';

describe('TokenInterceptorService', () => {
  let service: TokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
