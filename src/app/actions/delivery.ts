import { Action } from '@ngrx/store';
import { Delivery } from '../models/delivery.model';
import { type } from '../util';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 * 
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique. 
 */
export const ActionTypes = {
  FETCH_DELIVERIES: type('[Deliveries] Fetch'),
  CREATE_DELIVERY: type('[Delivery] Create'),
  REMOVE_DELIVERY: type('[Delivery] Remove'),
  SELECT_DELIVERY: type('[Delivery] Select'),
  UPDATE_DELIVERY: type('[Delivery] Update'),
};


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 * 
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class FetchDeliveriesAction implements Action {
  type = ActionTypes.FETCH_DELIVERIES;

  constructor(public payload: { entities: any, result: any }) { }
}

export class CreateDeliveryAction implements Action {
  type = ActionTypes.CREATE_DELIVERY;

  constructor(public payload: Delivery) { }
}

export class RemoveDeliveryAction implements Action {
  type = ActionTypes.REMOVE_DELIVERY;

  constructor(public payload: Delivery) { }
}

export class SelectDeliveryAction implements Action {
  type = ActionTypes.SELECT_DELIVERY;

  constructor(public payload: string) { }
}

export class UpdateDeliveryAction implements Action {
  type = ActionTypes.UPDATE_DELIVERY;

  constructor(public payload: Delivery) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = FetchDeliveriesAction
  | CreateDeliveryAction
  | RemoveDeliveryAction
  | SelectDeliveryAction
  | UpdateDeliveryAction;
