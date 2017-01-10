import { Action } from '@ngrx/store';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_PROCESSED } from './actions';

//return appropriate function depending on selected filter
export const visibilityReducer = (state = delivery => delivery, action: Action) => {
  switch (action.type) {
    case SHOW_ALL:
      return delivery => delivery;

    case SHOW_PROCESSED:
      return delivery => delivery.isProcessed;

    case SHOW_ACTIVE:
      return delivery => !delivery.isProcessed;

    default:
      return state;
  }
};