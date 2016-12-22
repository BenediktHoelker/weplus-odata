import { Component, OnInit } from '@angular/core';

import { Delivery } from '../shared/delivery.model';
import { DeliveryService } from '../shared/delivery.service';
import { ProcessingFormComponent } from '../processing-form/processing-form.component';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {
  title = "Processing";
  deliveries: Delivery[];
  showAll: boolean;

  constructor(
    private deliveryService: DeliveryService
  ) { }

  getDeliveries(): void{
    this.deliveryService.getDeliveries().subscribe((deliveries) => {this.deliveries = deliveries});
  }

  ngOnInit() {
    this.getDeliveries();
  }

  toggleShowAll(): void {
    this.showAll = !this.showAll;
  }
}
