import { Action } from '@ngrx/store';
import { createSelector } from 'reselect';

import { Filter } from '../models/filter';
import { FilterGroup } from '../models/filter-group';
import * as filter from '../actions/filter';

export interface State {
  loaded: boolean,
  loading: boolean,
  filterGroups: FilterGroup[];
};

const initialState: State = {
  loaded: false,
  loading: false,
  filterGroups: []
};

function load(state: State, action) {
  return Object.assign({}, state, {
    loading: true
  });
}

function loadSuccess(state: State, action) {
  const filterIds = action.payload.result;
  const { filterEntities, name, selectedFilterId } = action.payload;

  return {
    loaded: true,
    loading: false,
    filterGroups: [...state.filterGroups, {
      ids: [...filterIds],
      filterEntities: [...filterEntities],
      name: name,
      selectedFilterId: selectedFilterId,
    }]
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case filter.ActionTypes.LOAD: return load(state, action);
    case filter.ActionTypes.LOAD_SUCCESS: return loadSuccess(state, action);

    default: return state;
  }
}

export const getFilterGroups = (state: State) => state.filterGroups;

export const getFilterIds = (state: State) => state.filterGroups.map(filterGroup => {
  return filterGroup.ids;
});

export const getFilterEntities = (state: State) => state.filterGroups.reduce((previous, current) => {
  return previous.concat(current.filterEntities);
}, []);

export const getSelectedFilterIds = (state: State) => state.filterGroups.map(filterGroup => {
  return filterGroup.selectedFilterId;
});

export const getSelectedFilters = createSelector(getFilterEntities, getSelectedFilterIds, (entities, selectedIds) => {
  return selectedIds.map(id => entities[id]);
});
