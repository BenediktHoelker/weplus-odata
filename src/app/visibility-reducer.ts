import { ActionReducer, Action } from '@ngrx/store';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from './actions';

export const visibilityReducer = (state = delivery => delivery, action) => {
    switch (action.type) {
        case SHOW_ALL:
        {
            return delivery => delivery;
        }

        case SHOW_COMPLETED:
            return delivery => delivery.isProcessed;

        case SHOW_ACTIVE:
            return delivery => !delivery.isProcessed;

        default:
            return state;
    }
};