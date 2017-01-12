import { Component, Input, EventEmitter, Output } from '@angular/core';

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

  public newDeliveryFocusEventEmitter = new EventEmitter<boolean>();
  private selectedTabIndex = 0;

  addDeviation(): void {
    if(!this.delivery.deviations.length)
    {
      this.selectedTabIndex = 2;
    }
    let newDeviation = this.deliveryService.createDeviation();
    this.delivery.deviations.push(newDeviation);
  }

  getTotalQuantity(yardDeliveries: YardDelivery[] = []): number {
    return yardDeliveries.reduce((prev, current) => prev + current.quantity, 0);
  }

  constructor(
    private deliveryService: DeliveryService
  ) { }
}
