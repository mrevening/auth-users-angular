import { TestBed } from '@angular/core/testing';

import { LoginLibraryService } from './login-library.service';

describe('LoginLibraryService', () => {
  let service: LoginLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
