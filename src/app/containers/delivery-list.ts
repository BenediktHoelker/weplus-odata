import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import * as delivery from '../actions/delivery';
import { YardDelivery } from '../models/yard-delivery.model';
import { Delivery } from '../models/delivery.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'wp-delivery-list',
  template: `
    <wp-sidenav-delivery-list 
      [deliveries]="deliveries$ | async"
      (selectDelivery)="selectDelivery($event)"></wp-sidenav-delivery-list>
  `
})
export class DeliveryListComponent {
  deliveries$: Observable<Delivery[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.deliveries$ = store.select(fromRoot.getDeliveryArray);
  }

  selectDelivery(deliveryId: number): void {
    this.store.dispatch(new delivery.SelectDeliveryAction(deliveryId));
  }
}
