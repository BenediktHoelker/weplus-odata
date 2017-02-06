import { Action } from '@ngrx/store';
import { normalize, denormalize } from 'normalizr';
import { createSelector } from 'reselect';

import { deliverySchema, statusSchema } from '../models/schemas';
import { Delivery } from '../models/delivery.model';
import { Status } from '../models/status.model';

import {
  ADD_DELIVERIES, ADD_YARDS, CREATE_DELIVERY, REMOVE_DELIVERY, UPDATE_DELIVERY,
  TOGGLE_PROCESSING, TOGGLE_REGISTRATION,
  ADD_DEVIATION
} from './actions';

export interface State {
  ids: string[];
  entities: {};
  selectedDeliveryId: string | null;
};

const initialState: State = {
  ids: [],
  entities: {},
  selectedDeliveryId: null,
};

function addDeviation(state, action) {
  const {payload} = action;
  const {deliveryId, deviationId} = payload;

  //Look up the correct delivery, to simplify the rest of the code
  const delivery = state[deliveryId];

  return Object.assign({}, state, {
    // Update the Delivery object with a new "Devitations" array
    [deliveryId]: Object.assign({}, delivery, delivery.deviations.concat(deviationId))
  })
}

function addDeliveries(state, action) {
  const deliveryIds = action.payload.result;
  const deliveryEntities = action.payload.entities.deliveries;

  return {
    ids: [...state.ids, ...deliveryIds],
    entities: Object.assign({}, deliveryEntities),
    selectedDeliveryId: state.selectedDeliveryId
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DELIVERIES: return addDeliveries(state, action);

    case ADD_DEVIATION: return addDeviation(state, action);

    // case CREATE_DELIVERY:
    //   return [
    //     Object.assign(new Delivery(), {
    //       deviations: [],
    //       status: new Status(),
    //       yardDeliveries: action.payload.yardDeliveries,
    //     }),
    //     ...state.filter(delivery => delivery.id)
    //   ];

    // case REMOVE_DELIVERY:
    //   return state.filter(delivery => delivery.id !== action.payload._id);

    // case UPDATE_DELIVERY:
    //   return state.map(delivery => {
    //     return (delivery.id === action.payload._id || !delivery.id)
    //       ? Object.assign(new Delivery(), delivery, action.payload)
    //       : delivery;
    //   });
  }
};

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedDeliveryId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});