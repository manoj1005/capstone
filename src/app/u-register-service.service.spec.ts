import { TestBed } from '@angular/core/testing';

import { URegisterServiceService } from './u-register-service.service';

describe('URegisterServiceService', () => {
  let service: URegisterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(URegisterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
