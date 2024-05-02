import { TestBed } from '@angular/core/testing';

import { SuscripcioService } from './suscripcio.service';

describe('SuscripcioService', () => {
  let service: SuscripcioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuscripcioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
