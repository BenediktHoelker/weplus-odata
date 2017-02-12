import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { denormalize } from 'normalizr';
import { deliverySchema } from '../models/schemas';
import { of } from 'rxjs/observable/of';

import { Delivery } from '../models/delivery';
import { YardDelivery } from '../models/yard-delivery';

import { DeliveryService } from '../shared/delivery.service';

import * as fromRoot from '../reducers';
import * as delivery from '../actions/delivery';
import * as deviation from '../actions/deviation';
import * as yardDelivery from '../actions/yard-delivery';

@Component({
  selector: 'wp-delivery-detail',
  template: `
    <md-card *ngIf="(model | async)?.selectedDelivery">
      <md-card-title>{{(model | async)?.selectedDelivery.carrier || "New Delivery"}}</md-card-title>
      <form (ngSubmit)="submitDelivery(updateModel)"
        #deliveryDetailForm="ngForm">
        <md-card-content>
          <md-tab-group [selectedIndex]="selectedTabIndex">
            <md-tab label="Status">
              <wp-status-tab 
                [delivery]="(model | async)?.selectedDelivery"
                [yardDeliveries]="(model | async)?.activeYardDeliveries"></wp-status-tab>
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
    },
    md-card {
      margin-right: 50px;
    }
  `]
})
export class DeliveryDetailComponent {
  public newDeliveryFocusEventEmitter = new EventEmitter<boolean>();
  private model: Observable<any>;
  private updateModel: Observable<any>;
  private selectedTabIndex = 0;

  constructor(
    private store: Store<fromRoot.State>,
    private deliveryService: DeliveryService
  ) {
    this.model = Observable.combineLatest(
      this.store.select(fromRoot.getDeviationTypeArray),
      this.store.select(fromRoot.getSelectedDelivery),
      this.store.select(fromRoot.getSelectedDeliveryDeviations),
      this.store.select(fromRoot.getSelectedDeliveryYardDeliveries),
      this.store.select(fromRoot.getSelectedDeliveryActiveYardDeliveries),
      (deviationTypes, selectedDelivery, deviations, yardDeliveries, activeYardDeliveries) => {
        return {
          deviationTypes: deviationTypes,
          selectedDelivery: selectedDelivery,
          deviations: deviations,
          yardDeliveries: yardDeliveries,
          activeYardDeliveries: activeYardDeliveries
        }
      });

    this.updateModel = Observable.combineLatest(
      this.store.select(fromRoot.getDeviationEntities),
      this.store.select(fromRoot.getDeviationTypeEntities),
      this.store.select(fromRoot.getSelectedDelivery),
      this.store.select(fromRoot.getYardDeliveryEntities),
      this.store.select(fromRoot.getYardEntities),
      (deviations, deviationTypes, selectedDelivery, yardDeliveries, yards) => {
        return {
          deviations: deviations,
          deviationTypes: deviationTypes,
          selectedDelivery: selectedDelivery,
          yardDeliveries: yardDeliveries,
          yards: yards
        }
      })
  }

  addDeviation(delivery: Delivery): void {
    const payload = {
      deliveryId: delivery.id,
      deviationId: Math.random(),
    }
    this.store.dispatch(new deviation.AddDeviationAction(payload));
  }

  removeDelivery(deliveryId: number) {
    this.store.dispatch(new delivery.RemoveAction(deliveryId));
  }

  submitDelivery(obs: Observable<any>): void {
    obs.take(1).subscribe(value => {
      this.store.dispatch(new delivery.SubmitAction(value));
    });
  }
  
  updateDelivery(newStatus: Delivery) {
    this.store.dispatch(new delivery.UpdateAction(newStatus));
  }

  updateYardDelivery(newStatus: YardDelivery) {
    this.store.dispatch(new yardDelivery.UpdateYardDeliveryAction(newStatus));
  }
}
