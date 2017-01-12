import { Action } from '@ngrx/store';
import { FILTER_YARD } from './actions';

//return appropriate function depending on selected filter
export const yardFilterReducer = (state = delivery => delivery, action: Action) => {
  switch (action.type) {
    case FILTER_YARD:
      if (action.payload.name === 'All') {
        return delivery => delivery
      }
      return delivery => delivery.yardDeliveries.find(yardDelivery =>
        ((yardDelivery.yard._id === action.payload._id) && (yardDelivery.quantity >> 0)));

    default:
      return state;
  }
};