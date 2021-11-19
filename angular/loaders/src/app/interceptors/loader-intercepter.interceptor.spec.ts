import { TestBed } from '@angular/core/testing';

import { LoaderIntercepterInterceptor } from './loader-intercepter.interceptor';

describe('LoaderIntercepterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoaderIntercepterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoaderIntercepterInterceptor = TestBed.inject(LoaderIntercepterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
