import { Action } from '@ngrx/store';
import { Status } from '../models/status.model';
import * as status from '../actions/status';

export interface State { };

const initialState: State = {};

function fetchStatus(state: State, action) {
  const statusEntities = action.payload.entities.status;

  return Object.assign({}, statusEntities);
}

function updateStatus(state: State, action) {
  const {payload} = action;

  return Object.assign({}, state, { [payload.id]: payload });
}

export function reducer(state: State, action) {
  switch (action.type) {
    case status.ActionTypes.FETCH_STATUS: return fetchStatus(state, action);
    case status.ActionTypes.UPDATE_STATUS: return updateStatus(state, action);

    default: return state;
  }
}

export const getEntities = (state: State) => state;
