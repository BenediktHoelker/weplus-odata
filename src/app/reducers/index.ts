import { ActionReducer } from '@ngrx/store';
import { createSelector } from 'reselect';
import { environment } from '../../environments/environment';
import { normalize } from 'normalizr';
import { deliverySchema } from '../models/schemas';
import { statusSchema } from '../models/schemas';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';


/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromDeliveries from './delivery';
import * as fromDeviations from './deviation';
import * as fromStatus from './status';
import * as fromYardDelivery from './yard-delivery';


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  deliveries: fromDeliveries.State;
  deviations: fromDeviations.State;
  status: fromStatus.State;
  yardDelivery: fromYardDelivery.State;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
  deliveries: fromDeliveries.reducer,
  deviations: fromDeviations.reducer,
  status: fromStatus.reducer,
  yardDelivery: fromYardDelivery.reducer
};

// const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);
const developmentReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}


/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.deliveriesState$ = state$.select(getDeliveriesState);
 * 	}
 * }
 * ```
 */
export const getDeliveriesState = (state: State) => state.deliveries;

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function from the reselect library creates
 * very efficient selectors that are memoized and only recompute when arguments change.
 * The created selectors can also be composed together to select different
 * pieces of state.
 */
export const getDeliveryEntities = createSelector(getDeliveriesState, fromDeliveries.getEntities);
export const getDeliveryArray = createSelector(getDeliveriesState, fromDeliveries.getAll);
export const getDeliveryIds = createSelector(getDeliveriesState, fromDeliveries.getIds);
export const getSelectedDeliveryId = createSelector(getDeliveriesState, fromDeliveries.getSelectedId);
export const getSelectedDelivery = createSelector(getDeliveriesState, fromDeliveries.getSelected);


export const getDeviationsState = (state: State) => state.deviations;

export const getDeviationEntities = createSelector(getDeviationsState, fromDeviations.getEntities);
export const getSelectedDeliveryDeviations = createSelector(getDeviationEntities, getSelectedDelivery, (deviationEntities, selectedDelivery) => {
  return selectedDelivery.deviations.map(id => deviationEntities[id]);
});

export const getYardDeliveriesState = (state: State) => state.yardDelivery;

export const getYardDeliveryEntities = createSelector(getYardDeliveriesState, fromYardDelivery.getEntities);
export const getSelectedDeliveryYardDeliveries = createSelector(getYardDeliveryEntities, getSelectedDelivery, (yardDeliveryEntities, selectedDelivery) => {
  return selectedDelivery.yardDeliveries.map(id => yardDeliveryEntities[id]);
});

export const getStatusState = (state: State) => state.status;

export const getStatusEntities = createSelector(getStatusState, fromStatus.getEntities);
export const getSelectedDeliveryStatus = createSelector(getStatusEntities, getSelectedDelivery, getSelectedDeliveryYardDeliveries, (statusEntities, selectedDelivery, selectedDeliveryYardDeliveries) => {
  return [statusEntities[selectedDelivery.status], ...selectedDeliveryYardDeliveries.map(yardDelivery => statusEntities[yardDelivery.status])];
});


