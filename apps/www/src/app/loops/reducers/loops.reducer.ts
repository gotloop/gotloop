
import { LoopsActions, LoopsActionTypes } from '../actions/loops.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: LoopsActions): State {
  switch (action.type) {

    case LoopsActionTypes.LoadLoopss:
      return state;

    default:
      return state;
  }
}
