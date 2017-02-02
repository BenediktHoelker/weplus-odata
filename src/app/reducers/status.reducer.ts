// import { Action } from '@ngrx/store';
// import { Status } from '../models/status.model';
// import {
//   ADD_STATUSSES, TOGGLE_PROCESSING, TOGGLE_REGISTRATION
// } from './actions';
// import { YardDelivery } from '../models/yard-delivery.model';

// function details(state: Status, action) {
//   switch (action.type) {
//     case TOGGLE_PROCESSING:
//       if (state.id === action.payload.id) {
//         return Object.assign({}, state, {
//           isProcessed: !state.isProcessed
//         });
//       }
//       return state;

//     case TOGGLE_REGISTRATION:
//       if (state.id === action.payload.id) {
//         return Object.assign({}, state, {
//           isRegistered: !state.isRegistered
//         });
//       }
//       return state;

//     default: return state;
//   }
// }

// export function statusReducer(state: Status[], action) {
//   switch (action.type) {
//     case ADD_STATUSSES:
//       console.log(action.payload);
//       return action.payload;

//     case TOGGLE_PROCESSING:
//     case TOGGLE_REGISTRATION:
//       return state.map(status => details(status, action));

//     default: return state;
//   }
// }