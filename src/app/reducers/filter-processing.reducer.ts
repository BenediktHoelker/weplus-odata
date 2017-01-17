import { Action } from '@ngrx/store';
import { SHOW_PROCESSED, SHOW_NOT_PROCESSED, SHOW_ALL_P } from './actions';

//return appropriate function depending on selected filter
export const filterProcessingReducer = (state = delivery => delivery, action: Action) => {
  switch (action.type) {
    case SHOW_ALL_P:
      return delivery => delivery;

    case SHOW_PROCESSED:
      return delivery => delivery.isProcessed;

    case SHOW_NOT_PROCESSED:
      return delivery => !delivery.isProcessed;

    default:
      return state;
  }
};