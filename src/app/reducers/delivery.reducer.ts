import { Action } from '@ngrx/store';
import { normalize, denormalize } from 'normalizr';
import { createSelector } from 'reselect';

import { deliverySchema } from '../models/schemas';
import { Delivery } from '../models/delivery.model';

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
    selectedDeliveryId: state.selectedDeliveryId || deliveryIds[1]
  }
}

export function reducer(state = initialState, action): State {
  switch (action.type) {
    case ADD_DELIVERIES: return addDeliveries(state, action);
    case ADD_DEVIATION: return addDeviation(state, action);
    default: {
      return state;
    }
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
