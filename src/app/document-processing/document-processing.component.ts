import { Component, OnInit } from '@angular/core';

import { Delivery } from '../shared/delivery.model';
import { DeliveryService } from '../shared/delivery.service';

@Component({
  selector: 'app-document-processing',
  templateUrl: './document-processing.component.html',
  styleUrls: ['./document-processing.component.css']
})
export class DocumentProcessingComponent implements OnInit {
  title = "Dokumentenverarbeitung";
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
