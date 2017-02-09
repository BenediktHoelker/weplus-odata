import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { denormalize } from 'normalizr';
import { deliverySchema } from '../models/schemas';

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
      this.store.select(fromRoot.getDeviationEntities),
      this.store.select(fromRoot.getDeviationTypeEntities),
      this.store.select(fromRoot.getStatusEntities),
      this.store.select(fromRoot.getYardDeliveryEntities),
      this.store.select(fromRoot.getYardEntities),
      this.store.select(s => s.appliedFilters),
      (deliveries, deviations, deviationTypes, status, yardDeliveries, yards, appliedFilters) => {
        const denormalizedDeliveries = denormalize(deliveries, [deliverySchema], { 
            deliveries, deviations, deviationTypes, status, yardDeliveries, yards });
        return {
          deliveries: denormalizedDeliveries
          .filter(appliedFilters.processing)
          .filter(appliedFilters.registration)
          .filter(appliedFilters.deviation)
          .filter(appliedFilters.location)
        }
      });
  }

  selectDelivery(deliveryId: number): void {
    this.store.dispatch(new delivery.SelectDeliveryAction(deliveryId));
  }
}
