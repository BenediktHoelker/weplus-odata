import { Action } from '@ngrx/store';
import * as delivery from '../actions/delivery';
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

function createDeliverySuccess(state: State, action) {
  const deliveryId = action.payload.result;
  const yardDeliveryEntities = action.payload.entities.yardDeliveries;
  
  return {
    loaded: true,
    loading: false,
    entities: Object.assign({}, state.entities, yardDeliveryEntities)
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

function updateYardDelivery(state: State, action) {
  const {payload} = action;

  return {
    loaded: state.loaded,
    loading: state.loading,
    entities: Object.assign({}, state.entities, { [payload.id]: payload})
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case yardDelivery.ActionTypes.ADD_YARD_DELIVERY: return addYardDelivery(state, action);
    case delivery.ActionTypes.CREATE_DELIVERY_SUCCESS: return createDeliverySuccess(state, action);
    case yardDelivery.ActionTypes.LOAD: return load(state, action);
    case yardDelivery.ActionTypes.LOAD_SUCCESS: return loadSuccess(state, action);
    case yardDelivery.ActionTypes.UPDATE_YARD_DELIVERY: return updateYardDelivery (state, action);

    default: return state;
  }
}

export const getEntities = (state: State) => state.entities;
