import { Action, combineReducers } from '@ngrx/store';
import { ADD_DEVIATION } from './actions';

import * as deviation from '../actions/deviation';

export interface State {
  loaded: boolean,
  loading: boolean,
  entities: {}
};

const initialState: State = {
  loaded: false,
  loading: false,
  entities: {}
};

function addDeviation(state: State, action) {
  const {payload} = action;
  const {deviationId} = payload;

  //Create new Deviation object
  const deviation = { id: deviationId };

  //Insert the new Deviation object into the updated lookup table
  return {
    loaded: state.loaded,
    loading: state.loading,
    entities: Object.assign({}, state.entities, { [deviationId]: deviation })
  }
}


function removeDeviation(state: State, action) {
  const {payload} = action;
  const {deviationId} = payload;

  delete state[deviationId];

  return {
    loaded: state.loaded,
    loading: state.loading,
    entities: Object.assign({}, state.entities, { [deviationId]: deviation })
  }
}

function load(state: State, action) {
  return Object.assign({}, state, {
    loading: true
  });
}

function loadSuccess(state: State, action) {
  const deviationEntities = action.payload.entities.deviations;

  return {
    loaded: true,
    loading: false,
    entities: Object.assign({}, deviationEntities)
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case deviation.ActionTypes.ADD_DEVIATION: return addDeviation(state, action);
    case deviation.ActionTypes.REMOVE_DEVIATION: return removeDeviation(state, action);
    case deviation.ActionTypes.LOAD: return load(state, action);
    case deviation.ActionTypes.LOAD_SUCCESS: return loadSuccess(state, action);
    default: return state;
  }
}

export const getEntities = (state: State) => state.entities;


