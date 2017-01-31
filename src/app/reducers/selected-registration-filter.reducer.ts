import { Action } from '@ngrx/store';
import { SELECT_REGISTRATION_FILTER } from './actions';

export function selectedRegistrationFilterReducer (state, {type, payload}) {
  switch (type) {
    case SELECT_REGISTRATION_FILTER:
      return payload
    default:
      return state;
  }
};