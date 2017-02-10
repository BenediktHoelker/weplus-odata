import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { denormalize } from 'normalizr';
import { deliverySchema } from '../models/schemas';

import * as fromRoot from '../reducers';
import * as delivery from '../actions/delivery';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'wp-delivery-list',
  template: `
      <md-nav-list>
      <a md-list-item *ngFor="let delivery of deliveries"
        (click)="selectDelivery(delivery.id)">
        <h3 md-line fxLayout="row" fxLayoutAlign="space-between center">
          <span>
            <span>{{delivery.carrier}}</span>
            <span class="sidenav-supplier" *ngIf="delivery.carrier && delivery.supplier"> ({{delivery.supplier}})</span>
          </span>
          <span style="margin-left:0.5em"*ngIf="delivery.quantity"> [{{delivery.quantity}}]</span>
        </h3>
        <p md-line *ngIf="delivery.timeslotBegin && delivery.timeslotEnd">
          <span>{{delivery.timeslotBegin | date:'shortTime'}} - {{delivery.timeslotEnd | date:'shortTime' }} </span>
        </p>
      </a>
      </md-nav-list>
  `
})
export class DeliveryListComponent {
  private model$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
    this.model$ = Observable.combineLatest(
      this.store.select(fromRoot.getDeliveryArray),
      this.store.select(fromRoot.getDeviationEntities),
      this.store.select(fromRoot.getDeviationTypeEntities),
      this.store.select(fromRoot.getYardEntities),
      this.store.select(s => s.appliedFilters),
      (deliveries, deviations, deviationTypes, yards, appliedFilters) => {
        const denormalizedDeliveries = denormalize(deliveries, [deliverySchema], { 
            deliveries, deviations, deviationTypes, yards });
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
