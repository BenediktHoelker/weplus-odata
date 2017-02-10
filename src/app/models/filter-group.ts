import { Filter } from './filter';

export class FilterGroup {
  name: string;
  ids: string[];
  filterEntities: Filter[];
  selectedFilterId: number;
}