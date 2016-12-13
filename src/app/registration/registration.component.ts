import { Component, OnInit } from '@angular/core';

import { Delivery } from '../shared/delivery.model';
import { DeliveryService } from '../shared/delivery.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title = "Registration";
  deliveries: Delivery[];
  selectedDelivery: Delivery;

  constructor(
    private deliveryService: DeliveryService
  ) { }

  getDeliveries(): void{
    this.deliveryService.getDeliveries().then(deliveries => this.deliveries = deliveries);
  }

  registerDelivery(deliveryToBeRegistered: Delivery): void{
    this.deliveryService.registerDelivery(deliveryToBeRegistered);
  }

  ngOnInit() {
    this.getDeliveries();
  }
}
