import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { LoopActionTypes, LoopActions } from '../actions/loop.actions';


@Injectable()
export class LoopEffects {


  @Effect()
  loadLoops$ = this.actions$.pipe(
    ofType(LoopActionTypes.LoadLoops),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<LoopActions>) {}

}
