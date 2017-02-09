import { Component, Input, Output, EventEmitter } from '@angular/core';
import { YardDelivery } from '../models/yard-delivery.model';

@Component({
  selector: 'wp-yards-tab',
  template: `
    <div *ngIf="yardDeliveries.length">
      <div *ngFor="let yardDelivery of yardDeliveries" class="flex-container" fxLayout="column" >
        <md-input-container *ngIf="yardDelivery">
          <input mdInput class="form-control" type="number"
            [min]="0" 
            [(ngModel)]="yardDelivery.quantity"
            (change)="updateQuantity.emit(yardDelivery)"
            name="quantity {{yardDelivery?.yardName}}"
            placeholder="Quantity {{yardDelivery?.yardName}}">
        </md-input-container>
      </div>
    </div>
  `,
})
export class YardsTabComponent {
  @Input() yardDeliveries: YardDelivery[];
  @Output() updateQuantity = new EventEmitter<YardDelivery>();
}
