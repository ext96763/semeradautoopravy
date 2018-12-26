import { TestBed } from '@angular/core/testing';

import { GlobalErrorHandler } from './global-error-handler.service';
import { ErrorHandler } from '@angular/core';

describe('ErrorHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorHandler = TestBed.get(GlobalErrorHandler);
    expect(service).toBeTruthy();
  });
});
