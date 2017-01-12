import { Action } from '@ngrx/store';
import { Delivery } from '../shared/delivery.model';
import { ADD_DELIVERIES, ADD_YARDS, CREATE_DELIVERY, REMOVE_DELIVERY, UPDATE_DELIVERY, FILTER_DELIVERIES } from './actions';
import { YardDelivery } from '../shared/yard-delivery.model';

export const deliveriesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DELIVERIES:
      return action.payload;

    case CREATE_DELIVERY:
      return [
        Object.assign({}, {
          id: action.payload.id,
          yardDeliveries: action.payload.yardDeliveries,
          deviations: []
        }),
        ...state
      ];

    case REMOVE_DELIVERY:
      return state.filter(delivery => delivery._id !== action.payload._id);

    case UPDATE_DELIVERY:
      return state.map(delivery => {
        return delivery._id === action.payload._id ? Object.assign({}, delivery, action.payload) : delivery;
      });

    case FILTER_DELIVERIES:
      return state.filter(action.payload.filter);

    default:
      return state;
  }
};