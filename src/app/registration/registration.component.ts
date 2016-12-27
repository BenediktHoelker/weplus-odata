import { Component, OnInit } from '@angular/core';

import { Delivery } from '../shared/delivery.model';
import { DeliveryService } from '../shared/delivery.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title = 'Registration';
  deliveries: Delivery[];
  selectedDelivery: Delivery;

  constructor(
    private deliveryService: DeliveryService
  ) { }

  getDeliveries(): void {
    this.deliveryService.getDeliveries().subscribe((deliveries) => { this.deliveries = deliveries; });
  }

  createDelivery(): void {
    let newDelivery = this.deliveryService.createDelivery();
    this.deliveries.unshift(newDelivery);
  }

  ngOnInit() {
    this.getDeliveries();
  }
}
