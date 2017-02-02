import { Action } from '@ngrx/store';
import { Delivery } from '../models/delivery.model';
import { normalize, denormalize } from 'normalizr';
import { deliverySchema, statusSchema } from '../models/schemas';
import { Status } from '../models/status.model';
import {
  ADD_DELIVERIES, ADD_YARDS, CREATE_DELIVERY, REMOVE_DELIVERY, UPDATE_DELIVERY,
  TOGGLE_PROCESSING, TOGGLE_REGISTRATION
} from './actions';
import { YardDelivery } from '../models/yard-delivery.model';

function details(state: Status, action) {
  switch (action.type) {
    case TOGGLE_PROCESSING:
      if (state.id === action.payload.id) {
        return Object.assign({}, state, {
          isProcessed: !state.isProcessed
        });
      }
      return state;

    case TOGGLE_REGISTRATION:
      if (state.id === action.payload.id) {
        return Object.assign({}, state, {
          isRegistered: !state.isRegistered
        });
      }
      return state;
    default: return state;
  }
}

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
      console.log(action.payload.id);
      console.log(state);
      console.log(normalize(state, [deliverySchema]).entities.statusses);
      let normalizedState = normalize(state, [deliverySchema]);

      let statussesArray = Object.keys(normalizedState.entities.statusses).map(
        (k) => normalize(state, [deliverySchema]).entities.statusses[k]);
      console.log(statussesArray);

      let newStatusses = statussesArray.reduce(function (previous, current) {
        previous[current.id] = details(current, action);
        return previous;
      }, {});
      console.log(newStatusses);
      //TODO: remove Mutability!!!
      normalizedState.entities = Object.assign({}, normalizedState.entities, { statusses: newStatusses });

      console.log(normalizedState);

      let newDeliveries = denormalize(normalizedState.result, [deliverySchema], normalizedState.entities);
      console.log(newDeliveries);

      return newDeliveries;
    default:
      return state;
  }
};