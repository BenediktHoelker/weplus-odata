import { Component, Input, Output, EventEmitter } from '@angular/core';
import { YardDelivery } from '../models/yard-delivery';

@Component({
  selector: 'wp-yard-delivery-status-line',
  template: `
    <h3 md-subheader>{{yardDelivery.yardName}} </h3>
    <md-list-item *ngIf="yardDelivery">
      <div md-line class="flex-container" fxLayout="row">
        <md-checkbox [(ngModel)]="yardDelivery.isRegistered"
          (change)="toggleCheckbox.emit(yardDelivery)">
          <span>Registered</span>
        </md-checkbox>
        <md-checkbox [(ngModel)]="yardDelivery.isProcessed"
          (change)="toggleCheckbox.emit(yardDelivery)">
          <span>Processed</span>
        </md-checkbox>
      </div>
    </md-list-item>
  `,
})
export class YardDeliveryStatusLineComponent {
  @Input() yardDelivery: YardDelivery;
  @Output() toggleCheckbox = new EventEmitter<YardDelivery>();
}