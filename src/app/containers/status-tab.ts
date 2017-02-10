import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Delivery } from '../models/delivery';

import * as fromRoot from '../reducers';
import * as delivery from '../actions/delivery';

@Component({
  selector: 'wp-status-tab',
  template: `
      <md-list>
        <wp-status-line
          [delivery]="delivery"
          (toggleCheckbox)=updateStatus($event)></wp-status-line>
        <wp-status-line *ngFor="let delivery of yardDeliveries"
          [delivery]="delivery"
          (toggleCheckbox)=updateStatus($event)></wp-status-line>
      </md-list>
  `,
})
export class StatusTabComponent {
  @Input() delivery: Delivery;
  @Input() yardDeliveries: Delivery[];

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  updateStatus(newStatus: Delivery) {
    this.store.dispatch(new delivery.UpdateDeliveryAction(newStatus));
  }
}
