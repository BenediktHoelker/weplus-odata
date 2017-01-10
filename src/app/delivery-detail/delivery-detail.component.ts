import { Component, Input, OnInit } from '@angular/core';

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
export class DeliveryDetailComponent implements OnInit {
  @Input() delivery: Delivery;
  @Input() deliveries: Delivery[];

  addDeviation(): void {
    let newDeviation = this.deliveryService.createDeviation();
    this.delivery.deviations.push(newDeviation);
  }

  getTotalQuantity(yardDeliveries: YardDelivery[]): number {
    return yardDeliveries.reduce((prev, current) => prev + current.quantity, 0);
  }

  onSubmit() {
    let headers = this.deliveryService.createHeaders('application/json');
    let options = this.deliveryService.createRequestOptions(headers);
    this.delivery.isProcessed = true;
    this.deliveryService.submitDelivery(this.delivery, options);
  }

  constructor(
    private deliveryService: DeliveryService
  ) { }

  ngOnInit(
  ) { }

  removeDelivery(delivery: Delivery): void {
    this.deliveryService.removeDelivery(this.delivery, this.deliveries);
    this.delivery = this.deliveries[0];
  }
}
