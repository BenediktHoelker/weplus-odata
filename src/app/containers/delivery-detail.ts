import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Delivery } from '../models/delivery.model';
import { Deviation } from '../models/deviation.model';
import { DeviationType } from '../models/deviation-type.model';
import { Status } from '../models/status.model';
import { YardDelivery } from '../models/yard-delivery.model';

import { DeliveryService } from '../shared/delivery.service';

import * as fromRoot from '../reducers';
import * as delivery from '../actions/delivery';
import * as deviation from '../actions/deviation';
import * as yardDelivery from '../actions/yard-delivery';

@Component({
  selector: 'wp-delivery-detail',
  template: `
    <md-card *ngIf="(model | async)?.selectedDelivery" class="app-input-section">
      <md-card-title>{{(model | async)?.selectedDelivery.carrier || "New Delivery"}}</md-card-title>
      <form (ngSubmit)="updateDelivery.emit(delivery)"
        #deliveryDetailForm="ngForm">
        <md-card-content>
          <md-tab-group [selectedIndex]="selectedTabIndex">
            <md-tab label="Status">
              <wp-status-tab [status]="(model | async)?.status"></wp-status-tab>
            </md-tab>
            <md-tab label="Yards">
              <wp-yards-tab [yardDeliveries]="(model | async)?.yardDeliveries"
                (updateQuantity)="updateYardDelivery($event)"></wp-yards-tab>
            </md-tab>
            <md-tab label="Details">
              <wp-details-tab [delivery]="(model | async)?.selectedDelivery"
                (updateDetails)="updateDelivery($event)"></wp-details-tab>
            </md-tab>
            <md-tab *ngIf="(model | async)?.deviations.length"
              label="Deviations">
              <wp-deviations-tab 
                [delivery]="(model | async)?.selectedDelivery"
                [deviations]="(model | async)?.deviations"
                [deviationTypes]="(model | async)?.deviationTypes"
                (addDeviation)="addDeviation($event)"></wp-deviations-tab>
            </md-tab>
          </md-tab-group>
        </md-card-content>
        <md-card-actions>
          <button type="submit" md-button>Submit</button>
          <wp-details-actions
            [delivery]="(model | async)?.selectedDelivery"
            (addDeviation)="addDeviation($event)"
            (removeDelivery)="removeDelivery($event)"></wp-details-actions>
        </md-card-actions>
      </form>
    </md-card>
  `,
  styles: [`
    md-slide-toggle {
      margin-left: 30px;
    }
  `]
})
export class DeliveryDetailComponent {
  @Input() deviationTypes;

  public newDeliveryFocusEventEmitter = new EventEmitter<boolean>();
  private model;
  private selectedTabIndex = 0;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    //Timeout, so that selectors don't fire before state is set
    setTimeout(() => {
      this.model = Observable.combineLatest(
        this.store.select(fromRoot.getSelectedDeliveryDeviations),
        this.store.select(fromRoot.getDeviationTypeArray),
        this.store.select(fromRoot.getSelectedDelivery),
        this.store.select(fromRoot.getSelectedDeliveryStatus),
        this.store.select(fromRoot.getSelectedDeliveryYardDeliveries),
        (deviations, deviationTypes, selectedDelivery, status, yardDeliveries) => {
          return {
            deviations: deviations,
            deviationTypes: deviationTypes,
            selectedDelivery: selectedDelivery,
            status: status,
            yardDeliveries: yardDeliveries
          }
        });
    }, 1000);
  }

  addDeviation(delivery: Delivery): void {
    const payload = {
      deliveryId: delivery.id,
      deviationId: Math.random(),
    }
    this.store.dispatch(new deviation.AddDeviationAction(payload));
  }

  updateYardDelivery(payload: YardDelivery): void {
    this.store.dispatch(new yardDelivery.UpdateYardDeliveryAction(payload));
  }

  updateDelivery(payload: Delivery): void {
    this.store.dispatch(new delivery.UpdateDeliveryAction(payload));
  }
}