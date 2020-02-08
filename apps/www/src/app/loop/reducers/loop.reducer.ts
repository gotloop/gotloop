
import { LoopActions, LoopActionTypes } from '../actions/loop.actions';
import { LoopModel } from '@gotloop/lib';

/** Loop module state */
export interface State {
  /** current edited or viewed loop */
  currentLoop?: LoopModel;
  createStep?: 'record' | 'import' | 'edit' | 'upload';
}

export const initialState: State = {

};

export function reducer(state = initialState, action: LoopActions): State {
  switch (action.type) {

    case LoopActionTypes.LoadLoops:
      return state;

    default:
      return state;
  }
}
