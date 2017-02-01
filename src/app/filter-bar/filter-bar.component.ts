import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  SHOW_ALL_R, SHOW_REGISTERED, SHOW_NOT_REGISTERED,
  SHOW_ALL_P, SHOW_PROCESSED, SHOW_NOT_PROCESSED,
  FILTER_DEVIATION_TYPE, SHOW_ALL_D, SHOW_WITH_DEVIATION, SHOW_WITHOUT_DEVIATION
} from '../reducers/actions';

import { DeviationType } from '../models/deviation-type.model';
import { FilterGroup } from '../models/filter-group.model';
import { Yard } from '../models/yard.model';

@Component({
  selector: 'wp-filter-bar',
  template: `
    <md-card class="flex-container" fxLayout="row"
      fxLayoutWrap="wrap" fxLayoutAlign="space-around center">
      <md-select placeholder="Filter Location"
        [(ngModel)]="selectedYard" (ngModelChange)="updateYardFilter.emit(selectedYard)">
        <md-option *ngFor="let yard of yards" [value]="yard">{{yard.name}}</md-option>
      </md-select>
      <md-select *ngFor="let filterGroup of filterGroups" placeholder={{filterGroup.type}}
        [(ngModel)]="filterGroup.selectedFilterId"
        (ngModelChange)="updateFilter.emit(filterGroup)">
        <md-option *ngFor="let filter of filterGroup.filters"
          [value]="filter.id">{{filter.friendly}}</md-option>
      </md-select>
    </md-card>  
  `
})
export class FilterBarComponent {
  @Input() filterGroups: FilterGroup[];
  @Input() selectedYard: Yard;
  @Input() yards: Yard[];

  @Output() updateFilter: EventEmitter<any> = new EventEmitter();
  @Output() updateYardFilter: EventEmitter<any> = new EventEmitter();
}
