import { TestBed } from '@angular/core/testing';

import { PlanEditarService } from './plan-editar.service';

describe('PlanEditarService', () => {
  let service: PlanEditarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanEditarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
