import { Action } from '@ngrx/store';
import { SELECT_PROCESSING_FILTER } from './actions';

export function selectedProcessingFilterReducer (state, {type, payload}) {
  switch (type) {
    case SELECT_PROCESSING_FILTER:
      return payload
    default:
      return state;
  }
};