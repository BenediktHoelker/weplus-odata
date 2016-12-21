import { Component, Input, OnInit } from '@angular/core';

import { Delivery } from '../shared/delivery.model';
import { DeliveryService } from '../shared/delivery.service';
import { Deviation } from '../shared/deviation.model';
import { DeviationComponent } from '../deviation/deviation.component';

@Component({
  selector: 'app-processing-form',
  templateUrl: './processing-form.component.html'
})
export class ProcessingFormComponent implements OnInit {
  @Input()
  delivery: Delivery;

  addDeviation(): void {
    let newDeviation = this.deliveryService.createDeviation();
    this.delivery.deviations.push(newDeviation);
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
}
