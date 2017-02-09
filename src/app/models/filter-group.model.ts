import { Filter } from './filter.model';

export class FilterGroup {
  name: string;
  ids: string[];
  filterEntities: Filter[];
  selectedFilterId: number;
}