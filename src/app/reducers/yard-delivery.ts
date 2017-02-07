import { Action } from '@ngrx/store';
import { Status } from '../models/status.model';
import { YardDelivery } from '../models/yard-delivery.model';
import * as yardDelivery from '../actions/yard-delivery';

export interface State {};

const initialState: State = {};

function addYardDelivery(state: State, action) {
  const {payload} = action;
  const {yardDeliveryId} = payload;

  const yardDelivery = { id: yardDeliveryId };

  return Object.assign({}, state, { [yardDeliveryId]: yardDelivery });
}

function fetchYardDeliveries(state: State, action) {
  const yardDeliveryEntities = action.payload.entities.yardDeliveries;

  return  Object.assign({}, yardDeliveryEntities)  
}

function updateYardDeliveries(state: State, action) {
  const {payload} = action;

  return Object.assign({}, state, { [payload.id]: payload })  
}

export function reducer(state: State, action) {
  switch (action.type) {
    case yardDelivery.ActionTypes.ADD_YARD_DELIVERY: return addYardDelivery(state, action);
    case yardDelivery.ActionTypes.FETCH_YARD_DELIVERIES: return fetchYardDeliveries(state, action);
    case yardDelivery.ActionTypes.UPDATE_YARD_DELIVERY: return updateYardDeliveries(state, action);

    default: return state;
  }
}

export const getEntities = (state: State) => state;
