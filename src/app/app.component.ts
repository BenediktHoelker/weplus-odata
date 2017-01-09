import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Delivery } from './shared/delivery.model';
import { DeliveryService } from './shared/delivery.service';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from './actions';
import { visibilityReducer } from './visibility-reducer';
import { Yard } from './shared/yard.model';

interface AppState {
    visibilityFilter: Delivery;
    deliveries: Delivery[];
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private title = 'WEplus';
    private isOfficeView: boolean;
    private selectedDelivery: Delivery;
    private selectedYard: Yard;
    private registeredDeliveries: Delivery[];
    private yards: Yard[];

    public deliveries: Observable<Delivery[]>;
    public visibilityFilter: Observable<Delivery>;

    constructor(
        private deliveryService: DeliveryService,
        private store: Store<AppState>
    ) {
        // this.visibilityFilter = delivery => delivery.isProcessed;
        this.visibilityFilter = store.select(state => state.visibilityFilter);
        this.deliveries = this.deliveryService.getDeliveries();
    }

    filter(delivery): Delivery{
        return delivery;
    }
    // createDelivery(): void {
    //     let newDelivery = this.deliveryService.createDelivery();
    //     this.selectedDelivery = newDelivery;
    //     this.deliveries.unshift(newDelivery);
    // }

    getDeliveries(): void {
        this.deliveryService.getDeliveries()
            .map(payload => ({ type: 'ADD_ITEMS', payload }))
            .subscribe(action => this.store.dispatch(action));

        // .subscribe((deliveries) => {
        //     // this.deliveries = deliveries;
        //     this.selectedDelivery = deliveries[0];
        //     this.isOfficeView = true;
        // });
    }

    getYards(): void {
        this.deliveryService.getYards().subscribe((yards) => { this.yards = yards; });
    }

    // ngOnInit() {
    //     this.getDeliveries();
    //     this.getYards();
    // }

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

    showAll() {
        this.store.dispatch({ type: SHOW_ALL });
    }

    showActive() {
        this.store.dispatch({ type: SHOW_ACTIVE });
    }

    showCompleted() {
        this.store.dispatch({ type: SHOW_COMPLETED });
    }

    private isNotRegistered(delivery): boolean {
        return !delivery.isRegistered;
    }
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


export const counter = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state - 1;

        default:
            return state;
    }
};
