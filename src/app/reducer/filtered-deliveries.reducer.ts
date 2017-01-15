import { Delivery } from '../shared/delivery.model';
import { RESET_DELIVERIES, FILTER_DELIVERIES } from './actions';

export const filteredDeliveriesReducer = (state = [], action) => {
  switch (action.type) {
    case RESET_DELIVERIES:
      return action.payload;
      
    case FILTER_DELIVERIES:
      return state.filter(action.payload);

    default:
      return state;
  }
};