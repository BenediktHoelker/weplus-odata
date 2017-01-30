import { Action } from '@ngrx/store';
import { FILTER_DEVIATION_TYPE, SHOW_ALL_D, SHOW_WITH_DEVIATION, SHOW_WITHOUT_DEVIATION } from './actions';

//return appropriate function depending on selected filter
export function filterDeviationReducer(state = delivery => delivery, action: Action) {
  switch (action.type) {

    case FILTER_DEVIATION_TYPE:
      return delivery => delivery.deviations.find(deviation => (deviation.type === action.payload));

    case SHOW_ALL_D:
      return delivery => delivery;

    case SHOW_WITH_DEVIATION:
      return delivery => delivery.deviations.length;

    case SHOW_WITHOUT_DEVIATION:
      return delivery => !delivery.deviations.length;

    default:
      return state;
  }
};
