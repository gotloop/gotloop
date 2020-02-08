import { Action } from '@ngrx/store';

export enum LoopsActionTypes {
  LoadLoopss = '[Loops] Load Loopss',
}

export class LoadLoopss implements Action {
  readonly type = LoopsActionTypes.LoadLoopss;
}


export type LoopsActions = LoadLoopss;
