import { TestBed, inject } from '@angular/core/testing';

import { AddClassService } from './add-class.service';

describe('AddClassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddClassService]
    });
  });

  it('should ...', inject([AddClassService], (service: AddClassService) => {
    expect(service).toBeTruthy();
  }));
});
