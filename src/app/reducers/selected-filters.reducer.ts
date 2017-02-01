import { Action } from '@ngrx/store';

import { FilterGroup } from '../models/filter-group.model';
import { SELECT_FILTER, ADD_FILTERS } from './actions';

export function selectedFiltersReducer(state = [], {type, payload}) {
  switch (type) {
    case ADD_FILTERS:
      return payload;

    case SELECT_FILTER:
      return state.map(filterGroup => {
        return (filterGroup.type === payload.type)
          ? Object.assign(new FilterGroup(), filterGroup, payload.selectedFilterId)
          : filterGroup;
      });

    default:
      return state;
  }
};