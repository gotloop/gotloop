
import { LoopEditorActions, LoopEditorActionTypes } from '../actions/loop-editor.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: LoopEditorActions): State {
  switch (action.type) {

    case LoopEditorActionTypes.LoadLoopEditors:
      return state;

    default:
      return state;
  }
}
