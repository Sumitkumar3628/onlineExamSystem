import { TestBed } from '@angular/core/testing';

import { SendCatIdService } from './send-cat-id.service';

describe('SendCatIdService', () => {
  let service: SendCatIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendCatIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
