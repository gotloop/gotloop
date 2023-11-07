import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { LoopsActionTypes, LoopsActions } from '../actions/loops.actions';

@Injectable()
export class LoopsEffects {
  
  loadLoopss$ = createEffect(() => this.actions$.pipe(
    ofType(LoopsActionTypes.LoadLoopss),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY),
  ));

  constructor(private actions$: Actions<LoopsActions>) {}
}
