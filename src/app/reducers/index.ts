import { StoreModule } from '@ngrx/store';

import { deliveriesReducer } from './delivery.reducer';
import { deviationTypeReducer } from './deviation-type.reducer';
import { filterDeviationReducer } from './filter-deviation.reducer';
import { filterProcessingReducer } from './filter-processing.reducer';
import { filterRegistrationReducer } from './filter-registration.reducer';
import { filterYardReducer } from './filter-yard.reducer';
import { selectedDeliveryReducer } from './selected-delivery.reducer';
import { selectedYardReducer } from './selected-yard.reducer';
import { yardReducer } from './yard.reducer';

export function appStore(): any {
  return compose(combineReducers)({
    deliveries: deliveriesReducer,
    deviationTypes: deviationTypeReducer,
    deviationFilter: filterDeviationReducer,
    processingFilter: filterProcessingReducer,
    registrationFilter: filterRegistrationReducer,
    selectedDelivery: selectedDeliveryReducer,
    selectedYard: selectedYardReducer,
    yardFilter: filterYardReducer,
    yards: yardReducer,
  });
};