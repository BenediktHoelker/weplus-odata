import { Component, Input, OnInit } from '@angular/core';

import { Delivery } from '../shared/delivery.model';
import { DeliveryService } from '../shared/delivery.service';
import { Deviation } from '../shared/deviation.model';
import { DeviationComponent } from '../deviation/deviation.component';
import { DeviationType } from '../shared/deviation-type.model';

@Component({
  selector: 'app-processing-form',
  templateUrl: './processing-form.component.html'
})
export class ProcessingFormComponent implements OnInit {
  @Input() delivery: Delivery;
  @Input() deliveries: Delivery[];

  addDeviation(): void {
    let newDeviation = this.deliveryService.createDeviation();
    this.delivery.deviations.push(newDeviation);
  }

  getTotalQuantity(): number {
    return this.delivery.yards.reduce((prev, current) => prev + current.quantity, 0);
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
