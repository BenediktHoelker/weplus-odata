import { Action } from '@ngrx/store';
import { Status } from '../models/status.model';
import { type } from '../util';

export const ActionTypes = {
  ADD_STATUS: type('[Status] Add'),
  UPDATE_STATUS: type('[Status] Update'),
  LOAD: type('[Status] Load'),
  LOAD_SUCCESS: type('[Status] Load Success'),
  LOAD_FAIL: type('[Status] Load Fail'),
};

export class AddStatusAction implements Action {
  type = ActionTypes.ADD_STATUS;

  constructor(public payload: {
    statusId: number, deliveryId?: number, yardDeliveryId?: number
  }) { }
}

export class UpdateStatusAction implements Action {
  type = ActionTypes.UPDATE_STATUS;

  constructor(public payload: Status) { }
}


/**
 * Load Status Actions
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
  = AddStatusAction
  | UpdateStatusAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
