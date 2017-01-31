import { Action } from '@ngrx/store';

import { Filter } from '../models/filter.model';
import { SELECT_FILTER, ADD_FILTERS } from './actions';

export function selectedFilterReducer(state = [], {type, payload}) {
  switch (type) {
    case ADD_FILTERS:
      return payload;

    case SELECT_FILTER:
      return state.map(filter => {
        return (filter._name === payload._name)
          ? Object.assign(new Filter(), filter, payload)
          : filter;
      });

    default:
      return state;
  }
};