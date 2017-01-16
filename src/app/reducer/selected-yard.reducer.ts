import { Action } from '@ngrx/store';
import { SELECT_YARD } from './actions';

export const selectedYardReducer = (state, {type, payload}) => {
  switch (type) {
    case SELECT_YARD:
      return payload
    default:
      return state;
  }
};