import { Action } from '@ngrx/store';
import { ADD_YARDS, CREATE_YARD, FILTER_YARD } from './actions';

export const yardReducer = (state = [], action: Action) => {
  switch (action.type) {
    case ADD_YARDS:
      return action.payload;

    case CREATE_YARD:
      return [
        ...state,
        Object.assign({}, action.payload[0], {
          id: action.payload.id,
        })];

    default:
      return state;
  }
};