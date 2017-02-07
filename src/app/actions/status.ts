import { Action } from '@ngrx/store';
import { Status } from '../models/status.model';
import { type } from '../util';

export const ActionTypes = {
  ADD_STATUS: type('[Status] Add'),
  FETCH_STATUS: type('[Status] Fetch'),
  UPDATE_STATUS: type('[Status] Update'),
};

export class AddStatusAction implements Action {
  type = ActionTypes.ADD_STATUS;

  constructor(public payload: {
    statusId: number, deliveryId?: number, yardDeliveryId?: number
  }) { }
}

export class FetchStatusAction implements Action {
  type = ActionTypes.FETCH_STATUS;

  constructor(public payload: {
    entities: any, result: any
  }) { }
}

export class UpdateStatusAction implements Action {
  type = ActionTypes.UPDATE_STATUS;

  constructor(public payload: Status) { }
}

export type Actions
  = AddStatusAction
  | FetchStatusAction
  | UpdateStatusAction;
