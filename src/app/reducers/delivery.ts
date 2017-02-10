import { Action } from '@ngrx/store';
import { createSelector } from 'reselect';

import { deliverySchema } from '../models/schemas';
import { Delivery } from '../models/delivery';
import * as delivery from '../actions/delivery';
import * as deviation from '../actions/deviation';

import {
  ADD_DEVIATION
} from './actions';

export interface State {
  loaded: boolean,
  loading: boolean,
  ids: string[];
  entities: {};
  selectedDeliveryId: string | null;
};

const initialState: State = {
  loaded: false,
  loading: false,
  ids: [],
  entities: {},
  selectedDeliveryId: null,
};

function addDeviation(state: State, action) {
  const { payload } = action;
  const { deliveryId, deviationId } = payload;

  //Look up the correct delivery, to simplify the rest of the code
  const delivery = state.entities[deliveryId];

  return {
    loaded: state.loaded,
    loading: state.loading,
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
  const { payload } = action;
  const { deliveryId, yardDeliveryId } = payload;

  //Look up the correct delivery, to simplify the rest of the code
  const delivery = state.entities[deliveryId];

  return {
    loaded: state.loaded,
    loading: state.loading,
    ids: [...state.ids],
    entities: Object.assign({}, state.entities, {
      [deliveryId]: Object.assign({}, delivery, {
        yardDeliveries: delivery.yardDeliveries.concat(yardDeliveryId)
      })
    }),
    selectedDeliveryId: state.selectedDeliveryId
  }
}

function createSuccess(state: State, action) {
  const deliveryId = action.payload.result;
  const deliveryEntities = action.payload.entities.deliveries;
  
  return {
    loaded: true,
    loading: false,
    ids: [...state.ids, deliveryId],
    entities: Object.assign({}, state.entities, deliveryEntities),
    selectedDeliveryId: deliveryId
  }
}

function load(state: State, action) {
  return Object.assign({}, state, {
    loading: true
  });
}

function loadSuccess(state: State, action) {
  const deliveryIds = action.payload.result;
  const deliveryEntities = action.payload.entities.deliveries;

  return {
    loaded: true,
    loading: false,
    ids: [...state.ids, ...deliveryIds],
    entities: Object.assign({}, deliveryEntities),
    selectedDeliveryId: state.selectedDeliveryId || deliveryIds[0]
  }
}

function removeDeviation(state: State, action) {
  const { payload } = action;
  const { deliveryId, deviationId } = payload;

  //Look up the correct delivery, to simplify the rest of the code
  const delivery = state.entities[deliveryId];

  return {
    loaded: state.loaded,
    loading: state.loading,
    ids: [...state.ids],
    entities: Object.assign({}, state.entities, {
      [deliveryId]: Object.assign({}, delivery, {
        deviations: delivery.deviations.filter(id => !(id === deviationId))
      })
    }),
    selectedDeliveryId: state.selectedDeliveryId
  }
}

function selectDelivery(state: State, action) {
  const { payload } = action;
  console.log(payload);
  const deliveryId = payload;

  return {
    loaded: state.loaded,
    loading: state.loading,
    ids: [...state.ids],
    entities: state.entities,
    selectedDeliveryId: deliveryId
  }
}

function updateDelivery(state: State, action) {
  const { payload } = action;
  const deliveryId = payload.id;

  return {
    loaded: state.loaded,
    loading: state.loading,
    ids: [...state.ids],
    entities: Object.assign({}, state.entities, {
      [deliveryId]: payload
    }),
    selectedDeliveryId: state.selectedDeliveryId
  }
}

export function reducer(state = initialState, action): State {
  switch (action.type) {
    case delivery.ActionTypes.CREATE_DELIVERY_SUCCESS: return createSuccess(state, action);
    case deviation.ActionTypes.ADD_DEVIATION: return addDeviation(state, action);
    case delivery.ActionTypes.LOAD: return load(state, action);
    case delivery.ActionTypes.LOAD_SUCCESS: return loadSuccess(state, action);
    case deviation.ActionTypes.REMOVE_DEVIATION: return removeDeviation(state, action);
    case delivery.ActionTypes.SELECT_DELIVERY: return selectDelivery(state, action);
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
