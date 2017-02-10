import {
  ADD_DEVIATION_TYPES, ADD_YARDS,
  CREATE_DELIVERY, REMOVE_DELIVERY, SELECT_DELIVERY, UPDATE_DELIVERY,
  CREATE_YARD, FILTER_LOCATION, SELECT_YARD,
  ADD_FILTERS, ADD_FILTER_GROUPS, SELECT_FILTER,
  FILTER_DEVIATION_TYPE, SHOW_ALL_D, SHOW_WITH_DEVIATION, SHOW_WITHOUT_DEVIATION,
  SHOW_ALL_P, SHOW_PROCESSED, SHOW_NOT_PROCESSED,
  SHOW_ALL_R, SHOW_REGISTERED, SHOW_NOT_REGISTERED,
  ADD_STATUSSES
} from './reducers/actions';

export const processingPayload = {
  result: [0, 1, 2],
  name: "Processing",
  filterEntities: [
    { id: 0, friendly: "All", actionType: SHOW_ALL_P },
    { id: 1, friendly: "Processed", actionType: SHOW_PROCESSED },
    { id: 2, friendly: "Not Processed", actionType: SHOW_NOT_PROCESSED }],
  selectedFilterId: 0
};

export const registrationPayload = {
  result: [0, 1, 2],
  name: "Registration",
  filterEntities: [
    { id: 0, friendly: "All", actionType: SHOW_ALL_R },
    { id: 1, friendly: "Registered", actionType: SHOW_REGISTERED },
    { id: 2, friendly: "Not Registered", actionType: SHOW_NOT_REGISTERED }],
  selectedFilterId: 0
};

export const deviationPayload = {
  result: [0, 1, 2],
  name: "Deviation",
  filterEntities: [
    { id: 0, friendly: "All", actionType: SHOW_ALL_D },
    { id: 1, friendly: "Deviation", actionType: SHOW_WITH_DEVIATION },
    { id: 2, friendly: "No Deviation", actionType: SHOW_WITHOUT_DEVIATION }],
  selectedFilterId: 0
};

export const locationPayload = {
  result: [0, 1, 2, 3, 4],
  name: "Location",
  filterEntities: [
    { id: 0, friendly: "All", actionType: FILTER_LOCATION, payload: "All" },
    { id: 1, friendly: "Yard 1", actionType: FILTER_LOCATION, payload: "Yard 1" },
    { id: 2, friendly: "Yard 2", actionType: FILTER_LOCATION, payload: "Yard 2" },
    { id: 3, friendly: "Yard 3", actionType: FILTER_LOCATION, payload: "Yard 3" },
    { id: 4, friendly: "Express-Yard", actionType: FILTER_LOCATION, payload: "Express-Yard" }],
  selectedFilterId: 0
};