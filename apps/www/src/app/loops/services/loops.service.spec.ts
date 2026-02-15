import { TestBed } from '@angular/core/testing';
import { LoopsService } from './loops.service';
describe('LoopsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } }),
  );
  it('should be created', () => {
    const service: LoopsService = TestBed.inject(LoopsService);
    expect(service).toBeTruthy();
  });
});
