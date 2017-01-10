import { Action } from '@ngrx/store';
import { Delivery } from '../shared/delivery.model';
import { ADD_DELIVERIES, ADD_YARDS, CREATE_DELIVERY, REMOVE_DELIVERY } from './actions';
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
          //   .map(payload => ({ type: ADD_YARDS, payload }))
          //   .subscribe(action => this.store.dispatch(action))
          // .map(yard => Object.assign({}, { yard: yard }))
          // yardDeliveries: action.payload.yards.map(yard => new YardDelivery())
          // carrier: action.payload.carrier
          // carrier: action.payload.carrier,
          // guests: 0,
          // attending: false
        }),
        ...state
      ];

    case REMOVE_DELIVERY:
      return state.filter(delivery => delivery.id !== action.payload);

    default:
      return state;
  }
};