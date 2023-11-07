import { TestBed, waitForAsync } from '@angular/core/testing';
import { SimplModule } from './simpl.module';

describe('SimplModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SimplModule],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SimplModule).toBeDefined();
  });
});