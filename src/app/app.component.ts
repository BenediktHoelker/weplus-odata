import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Delivery } from './shared/delivery.model';
import { DeliveryService } from './shared/delivery.service';
import { id } from './id';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_PROCESSED, ADD_DELIVERY, REMOVE_DELIVERY, SELECT_DELIVERY } from './actions';
import { visibilityReducer } from './visibility-reducer';
import { Yard } from './shared/yard.model';

interface AppState {
  visibilityFilter: String;
  deliveries: Delivery[];
  selectedDelivery: Delivery;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'WEplus';
  private isOfficeView: boolean;
  private selectedYard: Yard;
  private registeredDeliveries: Delivery[];
  private yards: Yard[];

  public deliveries: Observable<Delivery[]>;
  public selectedDelivery: Observable<Delivery>;
  public visibilityFilter: Observable<String>;

  constructor(
    private deliveryService: DeliveryService,
    private store: Store<AppState>
  ) {
    this.deliveries = store.select(state => state.deliveries);
    this.deliveryService.getDeliveries()
      .map(payload => ({ type: ADD_DELIVERY, payload }))
      .subscribe(action => this.store.dispatch(action));
    this.visibilityFilter = store.select(state => state.visibilityFilter);
    this.selectedDelivery = store.select(state => state.selectedDelivery);
  }

  addDelivery(): void {
    this.store.dispatch({ type: ADD_DELIVERY, payload: { id: id() } });
  }

  // .subscribe((deliveries) => {
  //     // this.deliveries = deliveries;
  //     this.selectedDelivery = deliveries[0];
  //     this.isOfficeView = true;
  // });

  getYards(): void {
    this.deliveryService.getYards().subscribe((yards) => { this.yards = yards; });
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

  showAll() {
    this.store.dispatch({ type: SHOW_ALL });
  }

  showActive() {
    this.store.dispatch({ type: SHOW_ACTIVE });
  }

  showCompleted() {
    this.store.dispatch({ type: SHOW_PROCESSED });
  }

  private isNotRegistered(delivery): boolean {
    return !delivery.isRegistered;
  }
}
