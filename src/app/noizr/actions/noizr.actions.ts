import { Action } from '@ngrx/store';

export enum NoizrActionTypes {
  LoadSettings = '[Noizr] Load Settings',
  CreateSetting = '[Noizr] Create Setting',
  OpenSetting = '[Noizr] Open Setting',

  CreateNodeBox = '[Noizr] Create Node Box',
  CreateCable = '[Noizr] Create Cable',
}

export class LoadSettings implements Action {
  readonly type = NoizrActionTypes.LoadSettings;
}

export class CreateSetting implements Action {
  readonly type = NoizrActionTypes.CreateSetting;
}

export class OpenSetting implements Action {
  readonly type = NoizrActionTypes.OpenSetting;
}

export class CreateNodeBox implements Action {
  readonly type = NoizrActionTypes.CreateNodeBox;
}

export class CreateCable implements Action {
  readonly type = NoizrActionTypes.CreateCable;
}


export type NoizrActions = LoadSettings;
