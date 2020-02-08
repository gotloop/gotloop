import { async, TestBed } from '@angular/core/testing';
import { SimplModule } from './simpl.module';

describe('SimplModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SimplModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SimplModule).toBeDefined();
  });
});
