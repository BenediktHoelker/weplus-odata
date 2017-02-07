import { Action } from '@ngrx/store';
import { YardDelivery } from '../models/yard-delivery.model';
import { type } from '../util';

export const ActionTypes = {
  ADD_YARD_DELIVERY: type('[YardDelivery] Add'),
  FETCH_YARD_DELIVERIES: type('[YardDeliveries] Fetch'),
  UPDATE_YARD_DELIVERY: type('[YardDelivery] Update'),
};

export class AddYardDeliveryAction implements Action {
  type = ActionTypes.ADD_YARD_DELIVERY;

  constructor(public payload: {
    yardDeliveryId: number, deliveryId: number
  }) { }
}

export class FetchYardDeliveriesAction implements Action {
  type = ActionTypes.FETCH_YARD_DELIVERIES;

  constructor(public payload: {
    entities: any, result: any
  }) { }
}

export class UpdateYardDeliveryAction implements Action {
  type = ActionTypes.UPDATE_YARD_DELIVERY;

  constructor(public payload: YardDelivery) { }
}

export type Actions
  = AddYardDeliveryAction
  | FetchYardDeliveriesAction
  | UpdateYardDeliveryAction;
