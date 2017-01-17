import { Delivery } from './models/delivery.model';
import { DeviationType } from './models/deviation-type.model';
import { Yard } from './models/yard.model';

export interface AppState {
  deliveries: Delivery[];
  deviationTypes: DeviationType[];
  filteredDeliveries: Delivery[];
  selectedDelivery: Delivery;
  deviationFilter: String;
  processingFilter: String;
  registrationFilter: String;
  yardFilter: String;
  yards: Yard[];
}
