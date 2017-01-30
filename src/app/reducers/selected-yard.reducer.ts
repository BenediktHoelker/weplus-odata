import { Action } from '@ngrx/store';
import { SELECT_YARD } from './actions';

export function selectedYardReducer (state, {type, payload}) {
  switch (type) {
    case SELECT_YARD:
      return payload
    default:
      return state;
  }
};