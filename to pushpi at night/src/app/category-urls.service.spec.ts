import { TestBed, inject } from '@angular/core/testing';

import { CategoryUrlsService } from './category-urls.service';

describe('CategoryUrlsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryUrlsService]
    });
  });

  it('should be created', inject([CategoryUrlsService], (service: CategoryUrlsService) => {
    expect(service).toBeTruthy();
  }));
});
