import { Action } from '@ngrx/store';
import { ADD_DEVIATIONTYPES } from './actions';

export const deviationTypeReducer = (state = [], action: Action) => {
  switch (action.type) {
    case ADD_DEVIATIONTYPES:
      return action.payload;

    default:
      return state;
  }
};