import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoopEditorEffects } from './loop-editor.effects';

describe('LoopEditorEffects', () => {
  let actions$: Observable<any>;
  let effects: LoopEditorEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoopEditorEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(LoopEditorEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
