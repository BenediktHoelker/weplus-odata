import { Action } from '@ngrx/store';
import { Deviation } from '../models/deviation.model';
import { DeviationType } from '../models/deviation-type.model';
import { type } from '../util';

export const ActionTypes = {
  ADD_DEVIATION: type('[Deviation] Add'),
  FETCH_DEVIATIONS: type('[Deviations] Fetch'),
  REMOVE_DEVIATION: type('[Deviation] Remove'),
  UPDATE_DEVIATION: type('[Deviation] Update'),
};

export class FetchDeviationsAction implements Action {
  type = ActionTypes.FETCH_DEVIATIONS;

  constructor(public payload: { entities: any, result: any }) { }
}

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

export type Actions
  = AddDeviationAction
  | FetchDeviationsAction
  | RemoveDeviationAction
  | UpdateDeviationAction;
