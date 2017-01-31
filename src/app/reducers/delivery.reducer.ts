import { Action } from '@ngrx/store';
import { Delivery } from '../models/delivery.model';
import { Status } from '../models/status.model';
import { ADD_DELIVERIES, ADD_YARDS, CREATE_DELIVERY, REMOVE_DELIVERY, UPDATE_DELIVERY } from './actions';
import { YardDelivery } from '../models/yard-delivery.model';

export function deliveriesReducer(state = [], action) {
  switch (action.type) {
    case ADD_DELIVERIES:
      return action.payload;

    case CREATE_DELIVERY:
      return [
        Object.assign(new Delivery(), {
          deviations: [],
          status: new Status(),
          yardDeliveries: action.payload.yardDeliveries,
        }),
        ...state.filter(delivery => delivery._id)
      ];

    case REMOVE_DELIVERY:
      return state.filter(delivery => delivery._id !== action.payload._id);

    case UPDATE_DELIVERY:
      return state.map(delivery => {
        return (delivery._id === action.payload._id || !delivery._id)
          ? Object.assign(new Delivery(), delivery, action.payload)
          : delivery;
      });

    default:
      return state;
  }
};