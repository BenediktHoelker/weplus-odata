import { Action } from '@ngrx/store';
import { ADD_DEVIATION_TYPES } from './actions';

export const deviationTypeReducer = (state = [], action: Action) => {
  switch (action.type) {
    case ADD_DEVIATION_TYPES:
      return action.payload;

    default:
      return state;
  }
};