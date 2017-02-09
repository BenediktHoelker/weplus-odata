import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DeviationType } from '../models/deviation-type.model';
import { FilterGroup } from '../models/filter-group.model';
import { Yard } from '../models/yard.model';

@Component({
  selector: 'wp-filter-bar',
  template: `
    <md-card class="flex-container" fxLayout="row"
      fxLayoutWrap="wrap" fxLayoutAlign="space-around center">
      <md-select *ngFor="let filterGroup of filterGroups" placeholder={{filterGroup.name}}
        [(ngModel)]="filterGroup.selectedFilterId"
        (ngModelChange)="updateFilter.emit(filterGroup)">
        <md-option *ngFor="let filter of filterGroup.filterEntities"
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
