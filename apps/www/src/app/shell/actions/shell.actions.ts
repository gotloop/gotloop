import { Action } from '@ngrx/store';

export enum ShellActionTypes {
  EnableTopbar = '[Shell] Enable Topbar',
  SearchChange = '[Shell] Search Input Change',
}

export class EnableTopbar implements Action {
  readonly type = ShellActionTypes.EnableTopbar;
  constructor(public readonly isEnabled: boolean) {}
}
export class SearchChange implements Action {
  readonly type = ShellActionTypes.SearchChange;
  constructor(public readonly term: string) {}
}

export type ShellActions = EnableTopbar | SearchChange;
