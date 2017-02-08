import { Action } from '@ngrx/store';
import { createSelector } from 'reselect';

import { Yard } from '../models/yard.model';
import * as yard from '../actions/yard';

export interface State {
  ids: string[];
  entities: {};
};

const initialState: State = {
  ids: [],
  entities: {}
};

function fetchYards(state: State, action) {
  const yardIs = action.payload.result;
  const yardEntities = action.payload.entities.yards;

  return {
    ids: [...state.ids, ...yardIs],
    entities: Object.assign({}, yardEntities),
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case yard.ActionTypes.FETCH_YARDS: return fetchYards(state, action);

    default: return state;
  }
}

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getArray = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
