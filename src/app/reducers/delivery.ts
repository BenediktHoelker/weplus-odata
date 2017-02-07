import { Action } from '@ngrx/store';
import { normalize, denormalize } from 'normalizr';
import { createSelector } from 'reselect';

import { deliverySchema } from '../models/schemas';
import { Delivery } from '../models/delivery.model';
import * as delivery from '../actions/delivery';
import * as yardDelivery from '../actions/yard-delivery';
import * as deviation from '../actions/deviation';

import {
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

function addDeviation(state: State, action) {
  const {payload} = action;
  const {deliveryId, deviationId} = payload;

  //Look up the correct delivery, to simplify the rest of the code
  const delivery = state.entities[deliveryId];

  return {
    ids: [...state.ids],
    entities: Object.assign({}, state.entities, {
      [deliveryId]: Object.assign({}, delivery, {
        deviations: delivery.deviations.concat(deviationId)
      })
    }),
    selectedDeliveryId: state.selectedDeliveryId
  }
}

function addYardDelivery(state: State, action) {
  const {payload} = action;
  const {deliveryId, yardDeliveryId} = payload;

  //Look up the correct delivery, to simplify the rest of the code
  const delivery = state.entities[deliveryId];

  return {
    ids: [...state.ids],
    entities: Object.assign({}, state.entities, {
      [deliveryId]: Object.assign({}, delivery, {
        yardDeliveries: delivery.yardDeliveries.concat(yardDeliveryId)
      })
    }),
    selectedDeliveryId: state.selectedDeliveryId
  }
}

function fetchDeliveries(state: State, action) {
  const deliveryIds = action.payload.result;
  const deliveryEntities = action.payload.entities.deliveries;

  return {
    ids: [...state.ids, ...deliveryIds],
    entities: Object.assign({}, deliveryEntities),
    selectedDeliveryId: state.selectedDeliveryId || deliveryIds[1]
  }
}

function removeDeviation(state: State, action) {
  const {payload} = action;
  const {deliveryId, deviationId} = payload;

  //Look up the correct delivery, to simplify the rest of the code
  const delivery = state.entities[deliveryId];
  console.log(delivery.deviations.filter(id => !(id === deviationId)));

  return {
    ids: [...state.ids],
    entities: Object.assign({}, state.entities, {
      [deliveryId]: Object.assign({}, delivery, {
        deviations: delivery.deviations.filter(id => !(id === deviationId))
      })
    }),
    selectedDeliveryId: state.selectedDeliveryId
  }
}


function updateDelivery(state: State, action) {
  const {payload} = action;
  const deliveryId = payload.id;

  return {
    ids: [...state.ids],
    entities: Object.assign({}, state.entities, {
      [deliveryId]: payload
    }),
    selectedDeliveryId: state.selectedDeliveryId
  }
}

export function reducer(state = initialState, action): State {
  switch (action.type) {
    case deviation.ActionTypes.ADD_DEVIATION: return addDeviation(state, action);
    case yardDelivery.ActionTypes.ADD_YARD_DELIVERY: return addYardDelivery(state, action);
    case delivery.ActionTypes.FETCH_DELIVERIES: return fetchDeliveries(state, action);
    case deviation.ActionTypes.REMOVE_DEVIATION: return removeDeviation(state, action);
    case delivery.ActionTypes.UPDATE_DELIVERY: return updateDelivery(state, action);
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

export const getArray = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
