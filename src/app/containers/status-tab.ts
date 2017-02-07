import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Status } from '../models/status.model';

import * as fromRoot from '../reducers';
import * as status from '../actions/status';

@Component({
  selector: 'wp-status-tab',
  template: `
      <md-list>
        <wp-status-line *ngFor="let singleStatus of status"
          [status]="singleStatus"
          (toggleCheckbox)=updateStatus($event)></wp-status-line>
      </md-list>
  `,
})
export class StatusTabComponent {
  @Input() status: Status[];

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  updateStatus(newStatus: Status) {
    this.store.dispatch(new status.UpdateStatusAction(newStatus));
  }
}
