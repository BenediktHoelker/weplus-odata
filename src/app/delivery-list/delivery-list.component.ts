import { Component, EventEmitter, Input, Output } from '@angular/core';
import { YardDelivery } from '../models/yard-delivery.model';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent {
  @Input() deliveries;
  @Output() selected = new EventEmitter();

  getTotalQuantity(yardDeliveries: YardDelivery[] = []): number {
    return yardDeliveries.reduce((prev, current) => prev + current.quantity, 0);
  }
}


