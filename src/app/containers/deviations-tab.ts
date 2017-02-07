import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Deviation } from '../models/deviation.model';
import { DeviationType } from '../models/deviation-type.model';

import * as fromRoot from '../reducers';

@Component({
  selector: 'wp-deviations-tab',
  template: `
    <md-list-item *ngFor="let deviation of deviations">
      <wp-deviation-line [deviation]="deviation" [optionValues]="deviationTypes"></wp-deviation-line>
      <div class="flex-container" fxLayout="row" fxLayoutAlign="end">
        <button type="button" (click)="addDeviation()"
          md-button><md-icon>add</md-icon></button>
      </div>
    </md-list-item>
  `,
})
export class DeviationsTabComponent {
  @Input() deviations: Deviation[];
  @Input() deviationTypes: DeviationType[];

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  // updateStatus(newStatus: Status) {
  //   this.store.dispatch(new status.UpdateStatusAction(newStatus));
  // }
}
