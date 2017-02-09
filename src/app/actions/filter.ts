import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  LOAD: type('[Filters] Load'),
  LOAD_SUCCESS: type('[Filters] Load Success'),
  LOAD_FAIL: type('[Filters] Load Fail')
};

/**
 * Load Filter Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: { filterEntities: any, result: any }) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
} 


export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction;

