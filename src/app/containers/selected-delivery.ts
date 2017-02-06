import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import { Delivery } from '../models/delivery.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'wp-selected-delivery',
  template: '<wp-delivery-detail [delivery]="selectedDelivery$ | async" ></wp-delivery-detail>'
})
export class SelectedDeliveryComponent {
  selectedDelivery$: Observable<Delivery>;

  constructor(store: Store<fromRoot.State>) {
    this.selectedDelivery$ = store.select(fromRoot.getSelectedDelivery);
  }
}
