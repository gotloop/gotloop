import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NoizrEffects } from './noizr.effects';

describe('NoizrEffects', () => {
  let actions$: Observable<any>;
  let effects: NoizrEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NoizrEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(NoizrEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
