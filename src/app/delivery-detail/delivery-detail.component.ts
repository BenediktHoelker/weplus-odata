import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

import { Delivery } from '../shared/delivery.model';
import { DeliveryService } from '../shared/delivery.service';
import { Deviation } from '../shared/deviation.model';
import { DeviationComponent } from '../deviation/deviation.component';
import { DeviationType } from '../shared/deviation-type.model';
import { YardDelivery } from '../shared/yard-delivery.model';

@Component({
  selector: 'app-delivery-detail',
  templateUrl: './delivery-detail.component.html'
})
export class DeliveryDetailComponent {
  @Input() delivery: Delivery;
  @Input() deliveries: Delivery[];
  @Output() updateDelivery: EventEmitter<any> = new EventEmitter();
  @Output() removeDelivery: EventEmitter<any> = new EventEmitter();

  public myFocusTriggeringEventEmitter = new EventEmitter<boolean>();

  addDeviation(): void {
    let newDeviation = this.deliveryService.createDeviation();
    this.delivery.deviations.push(newDeviation);
  }

  getTotalQuantity(yardDeliveries: YardDelivery[]): number {
    return yardDeliveries.reduce((prev, current) => prev + current.quantity, 0);
  }

  constructor(
    private deliveryService: DeliveryService
  ) { }
}
