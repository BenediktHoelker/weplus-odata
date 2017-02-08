import { Action } from '@ngrx/store';
import { createSelector } from 'reselect';

import { DeviationType } from '../models/deviation-type.model';
import * as deviationType from '../actions/deviation-type';

export interface State {
  loaded: boolean,
  loading: boolean,
  ids: string[];
  entities: {};
};

const initialState: State = {
  loaded: false,
  loading: false,
  ids: [],
  entities: {}
};

function load(state: State, action) {
  return Object.assign({}, state, {
    loading: true
  });
}

function loadSuccess(state: State, action) {
  const deviationTypeIds = action.payload.result;
  const deviationTypeEntities = action.payload.entities.deviationTypes;

  return {
    loaded: true,
    loading: false,
    ids: [...state.ids, ...deviationTypeIds],
    entities: Object.assign({}, deviationTypeEntities),
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case deviationType.ActionTypes.LOAD: return load(state, action);
    case deviationType.ActionTypes.LOAD_SUCCESS: return loadSuccess(state, action);

    default: return state;
  }
}

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getArray = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
