import { Action, combineReducers } from '@ngrx/store';
import { ADD_DEVIATION } from './actions';

/*
 * Update normalized data c.f. http://redux.js.org/docs/recipes/reducers/UpdatingNormalizedData.html
 */
function addDeviationEntry(state, action) {
  const {payload} = action;
  const {deviationId, deviationType, deviationGravity} = payload;

  //Create new Deviation object
  const deviation = { id: deviationId, type: deviationType, gravity: deviationGravity };

  //Insert the new Deviation object into the updated lookup table
  return Object.assign({}, state, { [deviationId]: deviation });
}

function deviationsById(state = {}, action) {
  switch (action.type) {
    case ADD_DEVIATION: return addDeviationEntry(state, action);
    default: return state;
  }
}

function addDeviationId(state, action) {
  const {payload} = action;
  const {deviationId} = payload;
  //Append the new Deviation's ID to the list of all IDs
  return state.concat(deviationId);
}

function allDeviations(state, action) {
  switch (action.type) {
    case ADD_DEVIATION: return addDeviationId(state, action);
    default: return state;
  }
}

const deviationReducer = combineReducers({
  byId: deviationsById,
  allIds: allDeviations
});

