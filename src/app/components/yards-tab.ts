import { Component, Input, Output, EventEmitter } from '@angular/core';
import { YardDelivery } from '../models/yard-delivery.model';

@Component({
  selector: 'wp-yards-tab',
  template: `
    <div class="flex-container" fxLayout="column">
      <md-input-container *ngFor="let yardDelivery of yardDeliveries">
        <input mdInput class="form-control" type="number"
          [min]="0" 
          [(ngModel)]="yardDelivery.quantity"
          (change)="updateQuantity.emit(yardDelivery)"
          name="quantity {{yardDelivery.yard.name}}"
          placeholder="Quantity {{yardDelivery.yard.name}}">
      </md-input-container>
    </div>
  `,
})
export class YardsTabComponent {
  @Input() yardDeliveries: YardDelivery[];
  @Output() updateQuantity = new EventEmitter<YardDelivery>();
}
