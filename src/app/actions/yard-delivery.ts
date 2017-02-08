import { Action } from '@ngrx/store';
import { YardDelivery } from '../models/yard-delivery.model';
import { type } from '../util';

export const ActionTypes = {
  ADD_YARD_DELIVERY: type('[YardDelivery] Add'),
  UPDATE_YARD_DELIVERY: type('[YardDelivery] Update'),
  LOAD: type('[YardDeliveries] Load'),
  LOAD_SUCCESS: type('[YardDeliveries] Load Success'),
  LOAD_FAIL: type('[YardDeliveries] Load Fail'),
};

export class AddYardDeliveryAction implements Action {
  type = ActionTypes.ADD_YARD_DELIVERY;

  constructor(public payload: {
    yardDeliveryId: number, deliveryId: number
  }) { }
}

export class UpdateYardDeliveryAction implements Action {
  type = ActionTypes.UPDATE_YARD_DELIVERY;

  constructor(public payload: YardDelivery) { }
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
  = AddYardDeliveryAction
  | UpdateYardDeliveryAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
