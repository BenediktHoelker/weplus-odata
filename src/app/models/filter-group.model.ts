import { Filter } from './filter.model';

export class FilterGroup {
  type: string;
  filters: Filter[];
  selectedFilterId: number;
}