import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Delivery } from './shared/delivery.model';
import { DeliveryService } from './shared/delivery.service';
import { id } from './id';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_PROCESSED, ADD_DELIVERIES, ADD_YARDS, CREATE_YARD, CREATE_DELIVERY, REMOVE_DELIVERY, SELECT_DELIVERY } from './reducer/actions';
import { Yard } from './shared/yard.model';

interface AppState {
  deliveries: Delivery[];
  selectedDelivery: Delivery;
  statusFilter: String;
  yards: Yard[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private statusFilters = [
    { friendly: "All", action: SHOW_ALL },
    { friendly: "Processed", action: SHOW_PROCESSED },
    { friendly: "Active", action: SHOW_ACTIVE }
  ];
  private isOfficeView: boolean;
  private registeredDeliveries: Delivery[];
  private selectedYard: Yard;
  private title = 'WEplus';
  private status;

  private deliveries: Observable<Delivery[]>;
  private selectedDelivery: Observable<Delivery>;
  private statusFilter: Observable<String>;
  private yards: Observable<Yard[]>;

  constructor(
    private deliveryService: DeliveryService,
    private store: Store<AppState>
  ) {
    this.deliveries = store.select(state => state.deliveries);
    this.statusFilter = store.select(state => state.statusFilter);
    this.selectedDelivery = store.select(state => state.selectedDelivery);
    this.yards = store.select(state => state.yards);

    this.deliveryService.getDeliveries()
      .map(payload => ({ type: ADD_DELIVERIES, payload }))
      .subscribe(action => this.store.dispatch(action));
    this.deliveryService.getYards()
      .map(payload => ({ type: ADD_YARDS, payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  createDelivery(): void {
    let yardDeliveries = [];
    this.deliveryService.getYards().subscribe((yards) => {
      yards.map(yard => {
        yardDeliveries.push(this.deliveryService.createYardDelivery(yard));
      });
    });
    this.store.dispatch({ type: CREATE_DELIVERY, payload: { id: id(), yardDeliveries } });
  }

  selectDelivery(delivery: Delivery): void {
    this.store.dispatch({ type: SELECT_DELIVERY, payload: delivery });
  }

  setOfficeView() {
    this.isOfficeView = true;
  }

  setYardView(selectedYard) {
    this.isOfficeView = false;
    this.selectedYard = selectedYard;
  }

  updateStatusFilter(filter) {
    this.store.dispatch({ type: filter });
  }

  private isNotRegistered(delivery): boolean {
    return !delivery.isRegistered;
  }
}
