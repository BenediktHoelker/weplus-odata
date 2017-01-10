import { Action } from '@ngrx/store';
import { SELECT_DELIVERY } from './actions';

export const selectedDeliveryReducer = (state: any = null, {type, payload}) => {
  switch (type) {
    case SELECT_DELIVERY:
      return payload
    default:
      return state;
  }
};