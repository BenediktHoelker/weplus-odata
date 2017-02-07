import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import { Delivery } from '../models/delivery.model';
import { DeviationType } from '../models/deviation-type.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'wp-selected-delivery',
  template: '<wp-delivery-detail [deviationTypes]="deviationTypes$ | async"></wp-delivery-detail>'
})
export class SelectedDeliveryComponent {
  deviationTypes$: Observable<DeviationType[]>;

  constructor(store: Store<fromRoot.State>) {
    this.deviationTypes$ = store.select(fromRoot.getDeviationTypeArray);
  }
}