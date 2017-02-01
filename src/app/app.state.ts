import { Delivery } from './models/delivery.model';
import { DeviationType } from './models/deviation-type.model';
import { Filter } from './models/filter.model';
import { FilterGroup } from './models/filter-group.model';
import { Yard } from './models/yard.model';

export interface AppState {
  deliveries: Delivery[];
  selectedDelivery: Delivery;

  deviationTypes: DeviationType[];

  yards: Yard[];
  selectedYard: Yard;

  deviationFilter: Filter;
  processingFilter: Filter;
  registrationFilter: Filter;
  yardFilter: String;

  filterContent: FilterGroup[];
}
