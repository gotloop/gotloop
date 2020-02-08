import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ShellEffects } from './shell.effects';

describe('ShellEffects', () => {
  let actions$: Observable<any>;
  let effects: ShellEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ShellEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ShellEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
