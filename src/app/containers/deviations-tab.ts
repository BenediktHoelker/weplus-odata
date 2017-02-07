import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Delivery } from '../models/delivery.model';
import { Deviation } from '../models/deviation.model';
import { DeviationType } from '../models/deviation-type.model';

import * as fromRoot from '../reducers';
import * as deviation from '../actions/deviation';

@Component({
  selector: 'wp-deviations-tab',
  template: `
    <md-list-item>
      <wp-deviation-line *ngFor="let deviation of deviations"
        [deviation]="deviation" 
        [optionValues]="deviationTypes"
        (removeDeviation)="removeDeviation($event)"
        (updateDeviation)="updateDeviation($event)"></wp-deviation-line>
      <div class="flex-container" fxLayout="row" fxLayoutAlign="end">
        <button type="button" (click)="addDeviation.emit(delivery)"
          md-button><md-icon>add</md-icon></button>
      </div>
    </md-list-item>
  `,
})
export class DeviationsTabComponent {
  @Input() delivery: Delivery;
  @Input() deviations: Deviation[];
  @Input() deviationTypes: DeviationType[];
  @Output() addDeviation = new EventEmitter<any>();

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  updateDeviation(updatedDeviation: Deviation) {
    this.store.dispatch(new deviation.UpdateDeviationAction(updatedDeviation));
  }

  removeDeviation(deviationToRemove: Deviation): void {
    const payload = {
      deliveryId: this.delivery.id,
      deviationId: deviationToRemove.id,
    }
    this.store.dispatch(new deviation.RemoveDeviationAction(payload));
  }
}
