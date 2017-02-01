import { Action } from '@ngrx/store';

import { FilterGroup } from '../models/filter-group.model';
import { ADD_FILTERS, ADD_FILTER_GROUPS, SELECT_FILTER } from './actions';

export function selectedFiltersReducer(state = new Array<FilterGroup>(), {type, payload}) {
  switch (type) {
    case ADD_FILTER_GROUPS:
      return payload;

    case ADD_FILTERS:
      return state.map(filterGroup => {
        return (filterGroup.type === payload.type)
          ? Object.assign(new FilterGroup(), filterGroup, payload)
          : filterGroup;
      })

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