import { Action } from '@ngrx/store';

export enum LoopActionTypes {
  LoadLoops = '[Loop] Load Loops',
  
  
}

export class LoadLoops implements Action {
  readonly type = LoopActionTypes.LoadLoops;
}


export type LoopActions = LoadLoops;
