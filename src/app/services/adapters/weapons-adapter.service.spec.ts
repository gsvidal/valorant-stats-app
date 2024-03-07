import { TestBed } from '@angular/core/testing';

import { WeaponsAdapterService } from './weapons-adapter.service';

describe('WeaponsAdapterService', () => {
  let service: WeaponsAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponsAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
