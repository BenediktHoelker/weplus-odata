import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Delivery } from '../models/delivery.model';
import { Deviation } from '../models/deviation.model';
import { DeviationType } from '../models/deviation-type.model';
import { Status } from '../models/status.model';
import { YardDelivery } from '../models/yard-delivery.model';

import { DeviationComponent } from '../deviation/deviation.component';
import { DeliveryService } from '../shared/delivery.service';

import * as fromRoot from '../reducers';
import * as delivery from '../actions/delivery';
import * as deviation from '../actions/deviation';
import * as yardDelivery from '../actions/yard-delivery';

@Component({
  selector: 'wp-delivery-detail',
  templateUrl: './delivery-detail.component.html',
  styles: [`
    md-slide-toggle {
      margin-left: 30px;
    }
  `]
})
export class DeliveryDetailComponent {
  deviations$: Observable<Deviation[]>;
  deviationTypes$: Observable<DeviationType[]>;
  selectedDelivery$: Observable<Delivery>;
  status$: Observable<Status[]>;
  yardDeliveries$: Observable<YardDelivery[]>;
  @Input() delivery: Delivery;
  @Input() deliveries: Delivery[];
  @Output() removeDelivery: EventEmitter<any> = new EventEmitter();

  public newDeliveryFocusEventEmitter = new EventEmitter<boolean>();

  private selectedTabIndex = 0;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.deviations$ = this.store.select(fromRoot.getSelectedDeliveryDeviations);
    this.deviationTypes$ = this.store.select(fromRoot.getDeviationTypeArray);
    this.selectedDelivery$ = this.store.select(fromRoot.getSelectedDelivery);
    this.status$ = this.store.select(fromRoot.getSelectedDeliveryStatus);
    this.yardDeliveries$ = this.store.select(fromRoot.getSelectedDeliveryYardDeliveries);
  }

  addDeviation(): void {
    const payload = {
      deliveryId: this.delivery.id,
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

  getTotalQuantity(yardDeliveries: YardDelivery[] = []): number {
    return yardDeliveries.reduce((prev, current) => prev + current.quantity, 0);
  }
}
