import { TestBed, inject } from '@angular/core/testing';

import { NewExclusiveServiceService } from './new-exclusive-service.service';

describe('NewExclusiveServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewExclusiveServiceService]
    });
  });

  it('should be created', inject([NewExclusiveServiceService], (service: NewExclusiveServiceService) => {
    expect(service).toBeTruthy();
  }));
});
