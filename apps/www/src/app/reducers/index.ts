import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLoops from '../loops/reducers/loops.reducer';
import * as fromNoizr from '../noizr/reducers/noizr.reducer';
import * as fromShell from '../shell/reducers/shell.reducer';
import * as fromUser from '../user/reducers/user.reducer';
import * as fromLoop from '../loop/reducers/loop.reducer';
import * as fromLoopEditor from '../loop-editor/reducers/loop-editor.reducer';

export interface State {

  loops: fromLoops.State;
  noizr: fromNoizr.State;
  shell: fromShell.State;
  user: fromUser.State;
  loop: fromLoop.State;
  loopEditor: fromLoopEditor.State;
}

export const reducers: ActionReducerMap<State> = {

  loops: fromLoops.reducer,
  noizr: fromNoizr.reducer,
  shell: fromShell.reducer,
  user: fromUser.reducer,
  loop: fromLoop.reducer,
  loopEditor: fromLoopEditor.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
