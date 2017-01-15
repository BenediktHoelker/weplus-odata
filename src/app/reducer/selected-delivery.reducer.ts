import { Action } from '@ngrx/store';
import { SELECT_DELIVERY } from './actions';

export const selectedDeliveryReducer = (state: any = [], {type, payload}) => {
  switch (type) {
    case SELECT_DELIVERY:
      console.log(payload);
      return payload
    default:
      return state;
  }
};