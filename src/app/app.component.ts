import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Delivery } from './models/delivery.model';
import { DeviationType } from './models/deviation-type.model';
import { Yard } from './models/yard.model';

import { AppState } from './app.state';
import { DeliveryDetailComponent } from './delivery-detail/delivery-detail.component';
import { DeliveryService } from './shared/delivery.service';
import { ADD_DELIVERIES, ADD_DEVIATIONTYPES, ADD_YARDS, CREATE_YARD, CREATE_DELIVERY, REMOVE_DELIVERY, SELECT_DELIVERY, UPDATE_DELIVERY, FILTER_YARD, RESET_DELIVERIES } from './reducers/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "WEPLUS";
  @ViewChild(DeliveryDetailComponent)
  private child: DeliveryDetailComponent;

  public model;
  private subscription;
  private yardDeliveries = [];

  private deliveries: Observable<Delivery[]>;
  private deviationTypes: Observable<DeviationType[]>;
  private selectedDelivery: Observable<Delivery>;
  private selectedYard: Observable<Yard>;
  private yards: Observable<Yard[]>;
  private processingFilter: Observable<String>;
  private registrationFilter: Observable<String>;
  private yardFilter: Observable<String>;

  constructor(
    private deliveryService: DeliveryService,
    private store: Store<AppState>
  ) {
    this.deliveryService.getDeliveries()
      .map(payload => ({ type: RESET_DELIVERIES, payload }))
      .subscribe(action => this.store.dispatch(action));
    this.deliveryService.getDeliveries()
      .map(payload => ({ type: ADD_DELIVERIES, payload }))
      .subscribe(action => this.store.dispatch(action));
    this.deliveryService.getYards()
      .map(payload => ({ type: ADD_YARDS, payload }))
      .subscribe(action => this.store.dispatch(action));
    this.deliveryService.getDeviationTypes()
      .map(payload => ({ type: ADD_DEVIATIONTYPES, payload }))
      .subscribe(action => this.store.dispatch(action));

    /*
    Create yard deliveries for creating new deliveries later
    */
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
      store.select('deviationTypes'),
      store.select('filteredDeliveries'),
      store.select('processingFilter'),
      store.select('registrationFilter'),
      store.select('selectedDelivery'),
      store.select('selectedYard'),
      store.select('yardFilter'),
      store.select('yards'),
      (deliveries, deviationTypes, filteredDeliveries, processingFilter, registrationFilter, selectedDelivery, selectedYard, yardFilter, yards) => {
        return {
          deliveries: deliveries
            .filter(processingFilter)
            .filter(registrationFilter)
            .filter(yardFilter),
          deviationTypes: deviationTypes,
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
    this.selectDelivery();
    this.store.dispatch({ type: CREATE_DELIVERY, payload: { yardDeliveries: this.yardDeliveries } });
    this.child.newDeliveryFocusEventEmitter.emit(true);
  }

  removeDelivery(delivery: Delivery) {
    this.selectDelivery();
    this.deliveryService.removeDelivery(delivery)
      .subscribe(response => { this.store.dispatch({ type: REMOVE_DELIVERY, payload: delivery }); });
  }

  /*If no delivery is passed, the first delivery in the store is selected (c.f. constructor of AppComponent)*/
  selectDelivery(delivery?: Delivery) {
    console.log(delivery);
    this.store.dispatch({ type: SELECT_DELIVERY, payload: delivery });
  }

  updateDelivery(delivery: Delivery) {
    this.deliveryService.submitDelivery(delivery)
      .subscribe(delivery => this.store.dispatch({ type: UPDATE_DELIVERY, payload: delivery }));
    this.selectDelivery();
  }

  updateFilter(filter) {
    this.selectDelivery();
    this.store.dispatch({ type: filter });
  }

  updateYardFilter(yard) {
    this.selectDelivery();
    this.store.dispatch({ type: FILTER_YARD, payload: yard });
  }
}
