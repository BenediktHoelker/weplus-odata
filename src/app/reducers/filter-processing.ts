import { Action } from '@ngrx/store';
import { SHOW_PROCESSED, SHOW_NOT_PROCESSED, SHOW_ALL_P } from './actions';

//return appropriate function depending on selected filter
export function reducer(state = delivery => delivery, action: Action) {
  switch (action.type) {
    case SHOW_ALL_P:
      return delivery => delivery;

    case SHOW_PROCESSED:
      return delivery => delivery.status.isProcessed;

    case SHOW_NOT_PROCESSED:
      return delivery => !delivery.status.isProcessed;

    default:
      return state;
  }
};