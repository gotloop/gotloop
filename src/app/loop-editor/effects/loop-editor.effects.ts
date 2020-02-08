import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { LoopEditorActionTypes, LoopEditorActions } from '../actions/loop-editor.actions';


@Injectable()
export class LoopEditorEffects {


  @Effect()
  loadLoopEditors$ = this.actions$.pipe(
    ofType(LoopEditorActionTypes.LoadLoopEditors),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<LoopEditorActions>) {}

}
