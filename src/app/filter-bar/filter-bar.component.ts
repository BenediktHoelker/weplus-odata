import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SHOW_ALL_R, SHOW_NOT_REGISTERED, SHOW_REGISTERED, SHOW_PROCESSED, SHOW_NOT_PROCESSED, SHOW_ALL_P } from '../reducer/actions';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
  private processingFilters = [
    { friendly: "All", action: SHOW_ALL_P },
    { friendly: "Processed", action: SHOW_PROCESSED },
    { friendly: "Not Processed", action: SHOW_NOT_PROCESSED }
  ];
  private registrationFilters = [
    { friendly: "All", action: SHOW_ALL_R },
    { friendly: "Registered", action: SHOW_REGISTERED },
    { friendly: "Not Registered", action: SHOW_NOT_REGISTERED }
  ];

  @Input() processingStatus;
  @Input() registrationStatus;
  @Input() selectedYard;
  @Input() yards;

  @Output() updateFilter: EventEmitter<any> = new EventEmitter();
  @Output() updateYardFilter: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.processingStatus = SHOW_ALL_P;
    this.registrationStatus = SHOW_ALL_R;
  }

  ngOnInit() {
  }

}
