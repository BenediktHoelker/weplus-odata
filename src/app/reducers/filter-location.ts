import { Action } from '@ngrx/store';
import { FILTER_LOCATION } from './actions';

//return appropriate function depending on selected filter
export function reducer(state = delivery => delivery, action: Action) {
  switch (action.type) {
    case FILTER_LOCATION:
      if (action.payload === 'All') {
        return delivery => delivery
      }
      return delivery => delivery.yardDeliveries.find(yardDelivery =>
        ((yardDelivery.yard.name === action.payload) && (yardDelivery.quantity >> 0)));

    default:
      return state;
  }
};