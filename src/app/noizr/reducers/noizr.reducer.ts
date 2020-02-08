
import { NoizrActions, NoizrActionTypes } from '../actions/noizr.actions';
import { Settings } from '@gotloop/lib';

export interface State {
  id?: string;
  settings: Settings[];
}

export const initialState: State = {
  settings: [],
};

export function reducer(state = initialState, action: NoizrActions): State {
  switch (action.type) {

    case NoizrActionTypes.LoadSettings:
      return state;

    default:
      return state;
  }
}
