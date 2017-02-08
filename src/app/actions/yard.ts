import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  FETCH_YARDS: type('[Yards] Fetch'),
};


export class FetchYardsAction implements Action {
  type = ActionTypes.FETCH_YARDS;

  constructor(public payload: {
    entities: any, result: any
  }) { }
}


export type Actions
  = FetchYardsAction;
