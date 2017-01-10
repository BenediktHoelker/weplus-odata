import { Action } from '@ngrx/store';
import { Delivery } from './shared/delivery.model';
import { ADD_DELIVERY, REMOVE_DELIVERY } from './actions';

export const deliveriesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DELIVERY:
      return [
        ...state,
        Object.assign({}, action.payload[0], {
          id: action.payload.id,
          // carrier: action.payload.carrier
          // carrier: action.payload.carrier,
          // guests: 0,
          // attending: false
        })
      ];

    case REMOVE_DELIVERY:
      return state.filter(delivery => delivery.id !== action.payload);

    default:
      return state;
  }
};