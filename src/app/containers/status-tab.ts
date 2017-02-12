import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Delivery } from '../models/delivery';
import { YardDelivery } from '../models/yard-delivery';

import * as fromRoot from '../reducers';
import * as delivery from '../actions/delivery';
import * as yardDelivery from '../actions/yard-delivery';

@Component({
  selector: 'wp-status-tab',
  template: `
      <md-list>
        <wp-delivery-status-line
          [delivery]="delivery"
          (toggleCheckbox)=updateDelivery($event)></wp-delivery-status-line>
        <wp-yard-delivery-status-line *ngFor="let yardDelivery of yardDeliveries"
          [yardDelivery]="yardDelivery"
          (toggleCheckbox)=updateYardDelivery($event)></wp-yard-delivery-status-line>
      </md-list>
  `,
})
export class StatusTabComponent {
  @Input() delivery: Delivery;
  @Input() yardDeliveries: YardDelivery[];

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  updateDelivery(newStatus: Delivery) {
    this.store.dispatch(new delivery.UpdateAction(newStatus));
  }

  updateYardDelivery(newStatus: YardDelivery) {
    this.store.dispatch(new yardDelivery.UpdateYardDeliveryAction(newStatus));
  }
}
