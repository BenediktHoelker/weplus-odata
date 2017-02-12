import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Delivery } from '../models/delivery';

@Component({
  selector: 'wp-delivery-status-line',
  template: `
    <h3 md-subheader>{{delivery.yardName || "Factory"}} </h3>
    <md-list-item *ngIf="delivery">
      <div md-line class="flex-container" fxLayout="row">
        <md-checkbox [(ngModel)]="delivery.isRegistered"
          (change)="toggleCheckbox.emit(delivery)">
          <span>Registered</span>
        </md-checkbox>
        <md-checkbox [(ngModel)]="delivery.isProcessed"
          (change)="toggleCheckbox.emit(delivery)">
          <span>Processed</span>
        </md-checkbox>
      </div>
    </md-list-item>
  `,
})
export class DeliveryStatusLineComponent {
  @Input() delivery: Delivery;
  @Output() toggleCheckbox = new EventEmitter<Delivery>();
}