import { TestBed, inject } from '@angular/core/testing';

import { MemeDataService } from './meme-data.service';

describe('MemeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemeDataService]
    });
  });

  it('should be created', inject([MemeDataService], (service: MemeDataService) => {
    expect(service).toBeTruthy();
  }));
});
