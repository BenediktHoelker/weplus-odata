import { Action } from '@ngrx/store';
import { YardDelivery } from '../models/yard-delivery.model';
import { type } from '../util';

export const ActionTypes = {
  FETCH_DEVIATION_TYPES: type('[DeviationType] Fetch'),
};


export class FetchDeviationTypesAction implements Action {
  type = ActionTypes.FETCH_DEVIATION_TYPES;

  constructor(public payload: {
    entities: any, result: any
  }) { }
}


export type Actions
  = FetchDeviationTypesAction;
