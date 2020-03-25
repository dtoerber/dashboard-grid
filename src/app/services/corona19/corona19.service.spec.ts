import { TestBed } from '@angular/core/testing';

import { Corona19Service } from './corona19.service';

describe('Corona19Service', () => {
  let service: Corona19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Corona19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
