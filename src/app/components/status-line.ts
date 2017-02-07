import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Status } from '../models/status.model';
import { Delivery } from '../models/delivery.model';
import { YardDelivery } from '../models/yard-delivery.model';

@Component({
  selector: 'wp-status-line',
  template: `
    <h3 md-subheader>Factory</h3>
    <md-list-item>
      <div md-line class="flex-container" fxLayout="row">
        <md-checkbox [(ngModel)]="status.isRegistered"
          (change)="toggleCheckbox.emit(status)">
          <span>Registered</span>
        </md-checkbox>
        <md-checkbox [(ngModel)]="status.isProcessed"
          (change)="toggleCheckbox.emit(status)">
          <span>Processed</span>
        </md-checkbox>
      </div>
    </md-list-item>
  `,
})
export class StatusLineComponent {
  @Input() status: Status;
  @Input() delivery: Delivery;
  @Output() toggleCheckbox = new EventEmitter<Status>();

  get isProcessed(){
    return this.status.isProcessed;
  }

  get processingMessage(){
    return this.status.processingMessage;
  }

  get isRegistered() {
    return this.status.isRegistered;
  }

  get registrationMessage(){
    return this.status.registrationMessage;
  }
}