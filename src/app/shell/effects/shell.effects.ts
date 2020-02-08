import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ShellActionTypes, ShellActions } from '../actions/shell.actions';


@Injectable()
export class ShellEffects {


  @Effect()
  searchChange$ = this.actions$.pipe(
    ofType(ShellActionTypes.SearchChange),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<ShellActions>) {}

}
