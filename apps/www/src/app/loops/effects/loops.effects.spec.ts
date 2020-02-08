import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoopsEffects } from './loops.effects';

describe('LoopsEffects', () => {
  let actions$: Observable<any>;
  let effects: LoopsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoopsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(LoopsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
