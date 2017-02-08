import { Action } from '@ngrx/store';
import { Status } from '../models/status.model';
import * as status from '../actions/status';

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

function updateStatus(state: State, action) {
  const {payload} = action;

  return {
    loaded: state.loaded,
    loading: state.loading,
    entities: Object.assign({}, state.entities, { [payload.id]: payload })
  }
}

function load(state: State, action) {
  return Object.assign({}, state, {
    loading: true
  });
}

function loadSuccess(state: State, action) {
  const statusEntities = action.payload.entities.status;

  return {
    loaded: true,
    loading: false,
    entities: Object.assign({}, statusEntities)
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case status.ActionTypes.UPDATE_STATUS: return updateStatus(state, action);
    case status.ActionTypes.LOAD: return load(state, action);
    case status.ActionTypes.LOAD_SUCCESS: return loadSuccess(state, action);
    default: return state;
  }
}

export const getEntities = (state: State) => state.entities;
