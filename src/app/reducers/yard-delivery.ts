import { Action } from '@ngrx/store';
import { Status } from '../models/status.model';
import { YardDelivery } from '../models/yard-delivery.model';
import * as yardDelivery from '../actions/yard-delivery';

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

function addYardDelivery(state: State, action) {
  const {payload} = action;
  const {yardDeliveryId} = payload;

  const yardDelivery = { id: yardDeliveryId };

  return {
    loaded: state.loaded,
    loading: state.loading,
    entities: Object.assign({}, state.entities, { [yardDeliveryId]: yardDelivery })
  }
}

function updateYardDeliveries(state: State, action) {
  const {payload} = action;

  return {
    loaded: state.loaded,
    loading: state.loading,
    entities: Object.assign({}, state.entities, { [payload.id]: payload})
  }
}

function load(state: State, action) {
  return Object.assign({}, state, {
    loading: true
  });
}

function loadSuccess(state: State, action) {
  const yardDeliveryEntities = action.payload.entities.yardDeliveries;

  return {
    loaded: true,
    loading: false,
    entities: Object.assign({}, yardDeliveryEntities)
  }
}

export function reducer(state: State, action) {
  switch (action.type) {
    case yardDelivery.ActionTypes.ADD_YARD_DELIVERY: return addYardDelivery(state, action);
    case yardDelivery.ActionTypes.LOAD: return load(state, action);
    case yardDelivery.ActionTypes.LOAD_SUCCESS: return loadSuccess(state, action);

    default: return state;
  }
}

export const getEntities = (state: State) => state.entities;
