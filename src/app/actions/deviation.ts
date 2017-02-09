import { Action } from '@ngrx/store';
import { Deviation } from '../models/deviation.model';
import { type } from '../util';

export const ActionTypes = {
  ADD_DEVIATION: type('[Deviation] Add'),
  REMOVE_DEVIATION: type('[Deviation] Remove'),
  UPDATE_DEVIATION: type('[Deviation] Update'),
  LOAD: type('[Deviations] Load'),
  LOAD_SUCCESS: type('[Deviations] Load Success'),
  LOAD_FAIL: type('[Deviations] Load Fail'),
};

export class AddDeviationAction implements Action {
  type = ActionTypes.ADD_DEVIATION;

  constructor(public payload: {
    deviationId: number, deliveryId: number
  }) { }
}

export class RemoveDeviationAction implements Action {
  type = ActionTypes.REMOVE_DEVIATION;

  constructor(public payload: {
    deviationId: number, deliveryId: number
  }) { }
}

export class UpdateDeviationAction implements Action {
  type = ActionTypes.UPDATE_DEVIATION;

  constructor(public payload: Deviation) { }
}

/**
 * Load Deviations Actions
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
  = AddDeviationAction
  | RemoveDeviationAction
  | UpdateDeviationAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
