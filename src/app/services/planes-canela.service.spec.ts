import { TestBed } from '@angular/core/testing';

import { PlanesCanelaService } from './planes-canela.service';

describe('PlanesCanelaService', () => {
  let service: PlanesCanelaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanesCanelaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
