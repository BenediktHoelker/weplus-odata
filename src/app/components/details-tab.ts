import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Delivery } from '../models/delivery.model';

@Component({
  selector: 'wp-details-tab',
  template: `
    <div class="flex-container" fxLayout="column">
      <md-input-container>
        <input mdInput class="form-control" placeholder="Carrier"
          required [(ngModel)]="delivery.carrier"
          (change)=updateDetails.emit(delivery)
          name="carrier">
      </md-input-container>
      <md-input-container>
        <input mdInput class="form-control" placeholder="Supplier"
          required [(ngModel)]="delivery.supplier"
          (change)=updateDetails.emit(delivery)
          name="supplier">
      </md-input-container>
    </div>

  `,
})
export class DetailsTabComponent {
  @Input() delivery: Delivery;
  @Output() updateDetails = new EventEmitter<Delivery>();
}
