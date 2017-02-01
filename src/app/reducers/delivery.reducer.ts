import { Action } from '@ngrx/store';
import { Delivery } from '../models/delivery.model';
import { Status } from '../models/status.model';
import { ADD_DELIVERIES, ADD_YARDS, CREATE_DELIVERY, REMOVE_DELIVERY, UPDATE_DELIVERY, TOGGLE_PROCESSING, TOGGLE_REGISTRATION } from './actions';
import { YardDelivery } from '../models/yard-delivery.model';

function details(state: Delivery, action) {
  switch (action.type) {
    case TOGGLE_PROCESSING:
      if (state._id === action.payload) {
        return Object.assign({}, state, {
          status: Object.assign({}, state.status, { isProcessed: !state.status.isProcessed })
        });
      }

    case TOGGLE_REGISTRATION:
      if (state._id === action.payload) {
        return Object.assign({}, state, {
          status: Object.assign({}, state.status, { isRegistered: !state.status.isRegistered })
        });
      }
      return state;
  }
}

export function deliveriesReducer(state = new Array<Delivery>(), action) {
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

    //to shorten case statements, delegate detail updates to second private reducer   
    case TOGGLE_PROCESSING:
      return state.map(delivery => details(delivery, action));

    case TOGGLE_REGISTRATION:
      return state.map(delivery => details(delivery, action));

    default:
      return state;
  }
};