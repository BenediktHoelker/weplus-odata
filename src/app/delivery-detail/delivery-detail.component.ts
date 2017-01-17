import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Delivery } from '../models/delivery.model';
import { Deviation } from '../models/deviation.model';
import { DeviationType } from '../models/deviation-type.model';
import { YardDelivery } from '../models/yard-delivery.model';

import { DeviationComponent } from '../deviation/deviation.component';
import { DeliveryService } from '../shared/delivery.service';

@Component({
  selector: 'app-delivery-detail',
  templateUrl: './delivery-detail.component.html'
})
export class DeliveryDetailComponent {
  @Input() delivery: Delivery;
  @Input() deliveries: Delivery[];
  @Input() deviationTypes: DeviationType[];
  
  @Output() removeDelivery: EventEmitter<any> = new EventEmitter();
  @Output() updateDelivery: EventEmitter<any> = new EventEmitter();

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
