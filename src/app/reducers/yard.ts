import { Action } from '@ngrx/store';
import { createSelector } from 'reselect';

import { Yard } from '../models/yard';
import * as yard from '../actions/yard';

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
  const yardIds = action.payload.result;
  const yardEntities = action.payload.entities.yards;

  return {
    loaded: true,
    loading: false,
    ids: [...state.ids, ...yardIds],
    entities: Object.assign({}, yardEntities),
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case yard.ActionTypes.LOAD: return load(state, action);
    case yard.ActionTypes.LOAD_SUCCESS: return loadSuccess(state, action);

    default: return state;
  }
}

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getArray = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
