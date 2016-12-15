import { Component, Input } from '@angular/core';

import { Delivery } from '../shared/delivery.model';
import { DeliveryService } from '../shared/delivery.service';

@Component({
  selector: 'app-processing-form',
  templateUrl: './processing-form.component.html'
})
export class ProcessingFormComponent {
  @Input()
  delivery: Delivery;
  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.deliveryService.submitDelivery(this.delivery);
  }

  constructor(
    private deliveryService: DeliveryService
  ) { }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.delivery); }
}
