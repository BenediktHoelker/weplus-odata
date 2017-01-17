import { Delivery } from './models/delivery.model';
import { DeviationType } from './models/deviation-type.model';
import { Yard } from './models/yard.model';

export interface AppState {
  deliveries: Delivery[];
  deviationTypes: DeviationType[];
  filteredDeliveries: Delivery[];
  selectedDelivery: Delivery;
  processingFilter: String;
  registrationFilter: String;
  yardFilter: String;
  yards: Yard[];
}
