import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  LOAD: type('[Yards] Load'),
  LOAD_SUCCESS: type('[Yards] Load Success'),
  LOAD_FAIL: type('[Yards] Load Fail'),
};

/**
 * Load Yard Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: { entities: any, result: any }) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
} 


export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction;

