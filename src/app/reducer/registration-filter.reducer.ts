import { Action } from '@ngrx/store';
import { SHOW_ALL_R, SHOW_NOT_REGISTERED, SHOW_REGISTERED } from './actions';

//return appropriate function depending on selected filter
export const registrationFilterReducer = (state = delivery => delivery, action: Action) => {
  switch (action.type) {
    case SHOW_ALL_R:
      return delivery => delivery;

    case SHOW_REGISTERED:
      return delivery => delivery.isRegistered;

    case SHOW_NOT_REGISTERED:
      return delivery => !delivery.isRegistered;

    default:
      return state;
  }
};