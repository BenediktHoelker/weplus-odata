import { Component, OnInit, Input } from '@angular/core';

import { Delivery } from '../shared/delivery.model';
import { DeliveryService } from '../shared/delivery.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  @Input()
  delivery: Delivery;
  
  onSubmit() {
    this.delivery.isRegistered = true;
    this.deliveryService.submitDelivery(this.delivery, this.deliveryService.createRequestOptions(this.deliveryService.createHeaders('application/json')));
  }

  constructor(
    private deliveryService: DeliveryService
  ) { }

  ngOnInit(
  ) { }
}
