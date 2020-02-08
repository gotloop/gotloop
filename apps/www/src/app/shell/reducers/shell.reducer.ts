import { ShellActions, ShellActionTypes } from '../actions/shell.actions';

/**
 * Shell state (mainly header)
 */
export interface State {
  topbar?: { enabled: boolean };
  search?: { term: string };
}

export const initialState: State = {
  topbar: { enabled: false },
  search: { term: '' },
};

export function reducer(state = initialState, action: ShellActions): State {
  switch (action.type) {
    case ShellActionTypes.SearchChange:
      return {...state, search: {term: action.term} };

    case ShellActionTypes.EnableTopbar:
    return {...state, topbar: {enabled: action.isEnabled} };

    default:
      return state;
  }
}
