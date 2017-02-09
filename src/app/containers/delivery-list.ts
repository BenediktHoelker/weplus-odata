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
      [deliveries]="(model$ | async)?.deliveries"
      (selectDelivery)="selectDelivery($event)"></wp-sidenav-delivery-list>
  `
})
export class DeliveryListComponent {
  private model$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
    this.model$ = Observable.combineLatest(
      this.store.select(fromRoot.getDeliveryArray),
      (deliveries) => {
        return {
          deliveries: deliveries
            // .filter(deviationFilter.expression)
            // .filter(processingFilter.expression)
            // .filter(registrationFilter.expression)
            // .filter(yardFilter.expression)
        }
      });
  }

  selectDelivery(deliveryId: number): void {
    this.store.dispatch(new delivery.SelectDeliveryAction(deliveryId));
  }
}
