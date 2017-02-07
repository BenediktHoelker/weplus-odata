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
import * as deviation from '../actions/deviation';

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
  status$: Observable<Status[]>;
  @Input() delivery: Delivery;
  @Input() deliveries: Delivery[];
  @Input() deviationTypes: DeviationType[];
  @Output() removeDelivery: EventEmitter<any> = new EventEmitter();
  @Output() updateDelivery: EventEmitter<any> = new EventEmitter();

  public newDeliveryFocusEventEmitter = new EventEmitter<boolean>();

  private selectedTabIndex = 0;
  
  constructor(
    private store: Store<fromRoot.State>
  ) { 
    this.status$ = this.store.select(fromRoot.getSelectedDeliveryStatus);
  }

  addDeviation(): void {
    const payload = {
      deliveryId: this.delivery.id,
      deviationId: Math.random(),
    }
    this.store.dispatch(new deviation.AddDeviationAction(payload));
  }

  getTotalQuantity(yardDeliveries: YardDelivery[] = []): number {
    return yardDeliveries.reduce((prev, current) => prev + current.quantity, 0);
  }
}
