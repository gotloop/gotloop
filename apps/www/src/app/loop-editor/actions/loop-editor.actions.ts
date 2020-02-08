import { Action } from '@ngrx/store';

export enum LoopEditorActionTypes {
  LoadLoopEditors = '[LoopEditor] Load LoopEditors',
}

export class LoadLoopEditors implements Action {
  readonly type = LoopEditorActionTypes.LoadLoopEditors;
}


export type LoopEditorActions = LoadLoopEditors;
