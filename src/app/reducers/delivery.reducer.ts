import { Action } from '@ngrx/store';
import { Delivery } from '../models/delivery.model';
import { normalize } from 'normalizr';
import { deliverySchema, statusSchema } from '../models/schemas';
import { Status } from '../models/status.model';
import {
  ADD_DELIVERIES, ADD_YARDS, CREATE_DELIVERY, REMOVE_DELIVERY, UPDATE_DELIVERY,
  TOGGLE_PROCESSING, TOGGLE_REGISTRATION
} from './actions';
import { YardDelivery } from '../models/yard-delivery.model';

function details(state: Delivery, action) {
  switch (action.type) {
    case TOGGLE_PROCESSING:
      if (state.id === action.payload) {
        let yardDeliveryStatusIndex = state.yardDeliveries.findIndex(yardDelivery => yardDelivery.status._id === action.payload.status._id);
        //Check whether status belongs to delivery or yardDelivery
        if (state.status._id === action.payload.status._id) {
          return Object.assign({}, state, {
            status: Object.assign(new Status(), state.status, { isProcessed: !state.status.isProcessed })
          });
        }
        else if (yardDeliveryStatusIndex) {
          return Object.assign({}, state, {
            yardDeliveries: Object.assign({}, state.yardDeliveries, { isProcessed: !state.status.isProcessed })
          });
        }
        return state;
      }
      return state;

    case TOGGLE_REGISTRATION:
      if (state.id === action.payload) {
        return Object.assign({}, state, {
          status: Object.assign(new Status(), state.status, { isRegistered: !state.status.isRegistered })
        });
      }
      return state;

    default: return state;

    // case TOGGLE_PROCESSING_YARD:
    //   if (state._id === action.payload) {
    //     return Object.assign({}, state, {
    //       yardDelivery: Object.assign(new YardDelivery(),
    //         state.yardDelivery.find(
    //           yardDelivery => yardDelivery._id === action.payload.yardDeliveryId),
    //         { isProcessed: !state.status.isProcessed })
    //     });
    //   }

    // case TOGGLE_REGISTRATION_YARD:
    //   if (state._id === action.payload) {
    //     return Object.assign({}, state, {
    //       yardDelivery: Object.assign(new YardDelivery(),
    //         state.yardDelivery.find(
    //           yardDelivery => yardDelivery._id === action.payload.yardDeliveryId),
    //         { isRegistered: !state.status.isRegistered })
    //     });
    //   }
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
        ...state.filter(delivery => delivery.id)
      ];

    case REMOVE_DELIVERY:
      return state.filter(delivery => delivery.id !== action.payload._id);

    case UPDATE_DELIVERY:
      return state.map(delivery => {
        return (delivery.id === action.payload._id || !delivery.id)
          ? Object.assign(new Delivery(), delivery, action.payload)
          : delivery;
      });

    //to shorten case statements, delegate detail updates to second private reducer   
    case TOGGLE_PROCESSING:
    case TOGGLE_REGISTRATION:
      console.log(state);
      console.log(normalize(state, [deliverySchema]));
      return state.map(delivery => details(delivery, action));

    default:
      return state;
  }
};