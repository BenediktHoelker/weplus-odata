import { Component, Input, OnInit } from '@angular/core';

import { Delivery } from '../shared/delivery.model';
import { Deviation } from '../shared/deviation.model';
import { DeliveryService } from '../shared/delivery.service';

@Component({
  selector: 'app-processing-form',
  templateUrl: './processing-form.component.html'
})
export class ProcessingFormComponent implements OnInit {
  @Input()
  delivery: Delivery;
  submitted = false;

  addDeviation(): void {
    let newDeviation = this.deliveryService.createDeviation();
    this.delivery.deviations.push(newDeviation);
  }

  onSubmit() {
    this.submitted = true;
    this.deliveryService.submitDelivery(this.delivery);
  }

  constructor(
    private deliveryService: DeliveryService
  ) { }

  ngOnInit(
  ) { 
    /*If not exist, instantiate*/
    if (!this.delivery.deviations) {
      this.delivery.deviations = [];
    }
  }
}
