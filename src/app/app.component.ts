import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Delivery } from './shared/delivery.model';
import { DeliveryDetailComponent } from './delivery-detail/delivery-detail.component';
import { DeviationComponent } from './deviation/deviation.component';
import { DeliveryService } from './shared/delivery.service';
import { id } from './id';
import { ADD_DELIVERIES, ADD_YARDS, CREATE_YARD, CREATE_DELIVERY, REMOVE_DELIVERY, SELECT_DELIVERY, UPDATE_DELIVERY, FILTER_DELIVERIES, FILTER_YARD, RESET_DELIVERIES } from './reducer/actions';
import { Yard } from './shared/yard.model';

interface AppState {
  deliveries: Delivery[];
  filteredDeliveries: Delivery[];
  selectedDelivery: Delivery;
  processingFilter: String;
  registrationFilter: String;
  yardFilter: String;
  yards: Yard[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "WEPLUS";
  @ViewChild(DeliveryDetailComponent)
  private child: DeliveryDetailComponent;

  private headers;
  private options;
  private subscription;
  private yardDeliveries = [];

  private deliveries: Observable<Delivery[]>;
  private selectedDelivery: Observable<Delivery>;
  private selectedYard: Observable<Yard>;
  private yards: Observable<Yard[]>;

  private processingFilter: Observable<String>;
  private registrationFilter: Observable<String>;
  private yardFilter: Observable<String>;

  public model;

  constructor(
    private deliveryService: DeliveryService,
    private store: Store<AppState>
  ) {
    this.headers = this.deliveryService.createHeaders('application/json');
    this.options = this.deliveryService.createRequestOptions(this.headers);

    this.deliveryService.getDeliveries()
      .map(payload => ({ type: RESET_DELIVERIES, payload }))
      .subscribe(action => this.store.dispatch(action));
    this.deliveryService.getDeliveries()
      .map(payload => ({ type: ADD_DELIVERIES, payload }))
      .subscribe(action => this.store.dispatch(action));
    this.deliveryService.getYards()
      .map(payload => ({ type: ADD_YARDS, payload }))
      .subscribe(action => this.store.dispatch(action));

    this.subscription = this.store
      .select('yards')
      .subscribe((yards: Yard[]) => {
        yards.filter(yard => yard.name !== 'All')
          .map(yard => {
            this.yardDeliveries.push(this.deliveryService.createYardDelivery(yard));
          });
      });

    this.model = Observable.combineLatest(
      store.select('deliveries'),
      store.select('filteredDeliveries'),
      store.select('processingFilter'),
      store.select('registrationFilter'),
      store.select('selectedDelivery'),
      store.select('selectedYard'),
      store.select('yardFilter'),
      store.select('yards'),
      (deliveries, filteredDeliveries, processingFilter, registrationFilter, selectedDelivery, selectedYard, yardFilter, yards) => {
        return {
          deliveries: deliveries
            .filter(processingFilter)
            .filter(registrationFilter)
            .filter(yardFilter),
          filteredDeliveries,
          processingFilter,
          registrationFilter,
          selectedDelivery: selectedDelivery || deliveries
            .filter(processingFilter)
            .filter(registrationFilter)
            .filter(yardFilter)[0],
          selectedYard: selectedYard || yards[0],
          yardFilter,
          yards
        }
      });
  }

  createDelivery(): void {
    this.store.dispatch({ type: SELECT_DELIVERY, payload: null });
    this.store.dispatch({ type: CREATE_DELIVERY, payload: { id: id(), yardDeliveries: this.yardDeliveries } });
    this.child.newDeliveryFocusEventEmitter.emit(true);
  }

  removeDelivery(delivery: Delivery) {
    this.store.dispatch({ type: REMOVE_DELIVERY, payload: delivery });
  }

  selectDelivery(delivery: Delivery) {
    this.store.dispatch({ type: SELECT_DELIVERY, payload: delivery });
  }

  updateDelivery(delivery: Delivery) {
    this.deliveryService.submitDelivery(delivery, this.options)
      .subscribe(delivery => this.store.dispatch({ type: UPDATE_DELIVERY, payload: delivery }));
  }

  updateFilter(filter) {
    this.store.dispatch({ type: filter });
    this.store.dispatch({ type: SELECT_DELIVERY, payload: null });
  }

  updateYardFilter(yard) {
    this.store.dispatch({ type: FILTER_YARD, payload: yard });
    this.store.dispatch({ type: SELECT_DELIVERY, payload: null });
  }
}
