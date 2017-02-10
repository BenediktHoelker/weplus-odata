import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Delivery } from '../models/delivery';

@Component({
  selector: 'wp-details-actions',
  template: `
    <button type="button" (click)="addDeviation.emit(delivery)"
      md-button>Add Deviation</button>
    <button type="button" (click)="removeDelivery(delivery)"
      md-button><md-icon>delete</md-icon></button>
  `,
})

export class DetailsActionsComponent {
  @Input() delivery: Delivery;
  @Output() addDeviation = new EventEmitter<any>();
  @Output() removeDelivery = new EventEmitter<Delivery>();
}
