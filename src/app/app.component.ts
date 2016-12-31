import { Component } from '@angular/core';

import { Delivery } from './shared/delivery.model';
import { DeliveryService } from './shared/delivery.service';
import { Yard } from './shared/yard.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'WEplus';
    deliveries: Delivery[];
    isOfficeView: boolean;
    selectedDelivery: Delivery;
    selectedYard: Yard;
    registeredDeliveries: Delivery[];
    yards: Yard[];

    constructor(
        private deliveryService: DeliveryService
    ) { }

    createDelivery(): void {
        let newDelivery = this.deliveryService.createDelivery();
        this.selectedDelivery = newDelivery;
        this.deliveries.unshift(newDelivery);
    }

    getDeliveries(): void {
        this.deliveryService.getDeliveries().subscribe((deliveries) => {
            this.deliveries = deliveries;
            this.selectedDelivery = deliveries[0];
            this.isOfficeView = true;
        });
    }

    getYards(): void {
        this.deliveryService.getYards().subscribe((yards) => { this.yards = yards; });
    }

    ngOnInit() {
        this.getDeliveries();
        this.getYards();
    }

    onSelect(delivery: Delivery): void {
        this.selectedDelivery = delivery;
    }

    setOfficeView() {
        this.isOfficeView = true;
    }

    setYardView(selectedYard) {
        this.isOfficeView = false;
        this.selectedYard = selectedYard;
    }

    private isNotRegistered(delivery): boolean {
        return !delivery.isRegistered;
    }
}
