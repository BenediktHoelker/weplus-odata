import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  SHOW_ALL_R, SHOW_REGISTERED, SHOW_NOT_REGISTERED,
  SHOW_ALL_P, SHOW_PROCESSED, SHOW_NOT_PROCESSED,
  FILTER_DEVIATION_TYPE, SHOW_ALL_D, SHOW_WITH_DEVIATION, SHOW_WITHOUT_DEVIATION
} from '../reducers/actions';

import { DeviationType } from '../models/deviation-type.model';
import { Yard } from '../models/yard.model';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
  private processingFilters;
  private registrationFilters;

  private processingFilter;
  private registrationFilter;

  @Input() deviationFilterActions;
  @Input() deviationFilter;
  @Input() selectedYard: Yard;
  @Input() yards: Yard[];

  @Output() updateFilter: EventEmitter<any> = new EventEmitter();
  @Output() updateYardFilter: EventEmitter<any> = new EventEmitter();
  @Output() updateDeviationFilter: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
    this.processingFilters = [
      { friendly: "All", type: SHOW_ALL_P },
      { friendly: "Processed", type: SHOW_PROCESSED },
      { friendly: "Not Processed", type: SHOW_NOT_PROCESSED }
    ];
    this.registrationFilters = [
      { friendly: "All", type: SHOW_ALL_R },
      { friendly: "Registered", type: SHOW_REGISTERED },
      { friendly: "Not Registered", type: SHOW_NOT_REGISTERED }
    ];
    this.registrationFilter = this.registrationFilters[0];
    this.processingFilter = this.processingFilters[0];
  }

  ngOnChanges() {
  }
}
