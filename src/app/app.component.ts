import { Component } from '@angular/core';

import { Delivery } from './shared/delivery.model';
import { DeliveryService } from './shared/delivery.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'WEplus';
    deliveries: Delivery[];

    constructor(
        private deliveryService: DeliveryService
    ) { }

    getDeliveries(): void {
        this.deliveryService.getDeliveries().subscribe((deliveries) => { this.deliveries = deliveries; });
    };

    ngOnInit() {
        this.getDeliveries();
    }
}
