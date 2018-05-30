import { TestBed, inject } from '@angular/core/testing';

import { AdministartionService } from './administartion.service';

describe('AdministartionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdministartionService]
    });
  });

  it('should be created', inject([AdministartionService], (service: AdministartionService) => {
    expect(service).toBeTruthy();
  }));
});
