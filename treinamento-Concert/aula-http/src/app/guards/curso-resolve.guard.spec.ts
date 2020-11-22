import { TestBed } from '@angular/core/testing';

import { CursoResolveGuard } from './curso-resolve.guard';

describe('CursoResolveGuard', () => {
  let guard: CursoResolveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CursoResolveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
