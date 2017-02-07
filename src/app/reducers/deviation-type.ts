import { Action } from '@ngrx/store';
import { createSelector } from 'reselect';

import { Status } from '../models/status.model';
import { DeviationType } from '../models/deviation-type.model';
import * as deviationType from '../actions/deviation-type';

export interface State {
  ids: string[];
  entities: {};
};

const initialState: State = {
  ids: [],
  entities: {}
};

function fetchDeviationTypes(state: State, action) {
  const deviationTypeIds = action.payload.result;
  const deviationTypeEntities = action.payload.entities.deviationTypes;

  return {
    ids: [...state.ids, ...deviationTypeIds],
    entities: Object.assign({}, deviationTypeEntities),
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case deviationType.ActionTypes.FETCH_DEVIATION_TYPES: return fetchDeviationTypes(state, action);

    default: return state;
  }
}

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getArray = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
