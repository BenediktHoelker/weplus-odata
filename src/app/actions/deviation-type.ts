import { Action } from '@ngrx/store';
import { YardDelivery } from '../models/yard-delivery.model';
import { type } from '../util';

export const ActionTypes = {
  LOAD: type('[DeviationTypes] Load'),
  LOAD_SUCCESS: type('[DeviationTypes] Load Success'),
  LOAD_FAIL: type('[DeviationTypes] Load Fail'),
};

/**
 * Load DeviationType Actions
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

