import { Action, combineReducers } from '@ngrx/store';
import { ADD_DEVIATION } from './actions';

import * as deviation from '../actions/deviation';

export interface State { };

const initialState: State = {};

function addDeviation(state: State, action) {
  const {payload} = action;
  const {deviationId} = payload;

  //Create new Deviation object
  const deviation = { id: deviationId };

  //Insert the new Deviation object into the updated lookup table
  return Object.assign({}, state, { [deviationId]: deviation });
}

function fetchDeviations(state: State, action) {
  const deviationEntities = action.payload.entities.deviations;

  return Object.assign({}, deviationEntities)
}

function removeDeviation(state: State, action) {
  const {payload} = action;
  const {deviationId} = payload;

  delete state[deviationId];

  return Object.assign({}, state);
}


export function reducer(state = initialState, action) {
  switch (action.type) {
    case deviation.ActionTypes.ADD_DEVIATION: return addDeviation(state, action);
    case deviation.ActionTypes.FETCH_DEVIATIONS: return fetchDeviations(state, action);
    case deviation.ActionTypes.REMOVE_DEVIATION: return removeDeviation(state, action);
    default: return state;
  }
}

export const getEntities = (state: State) => state;


