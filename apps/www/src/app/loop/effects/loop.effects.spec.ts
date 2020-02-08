import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoopEffects } from './loop.effects';

describe('LoopEffects', () => {
  let actions$: Observable<any>;
  let effects: LoopEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoopEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(LoopEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
