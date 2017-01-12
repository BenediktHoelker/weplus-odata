import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Delivery } from './shared/delivery.model';
import { DeliveryDetailComponent } from './delivery-detail/delivery-detail.component';
import { DeviationComponent } from './deviation/deviation.component';
import { DeliveryService } from './shared/delivery.service';
import { id } from './id';
import { SHOW_ALL_R, SHOW_NOT_REGISTERED, SHOW_REGISTERED, SHOW_PROCESSED, SHOW_NOT_PROCESSED, SHOW_ALL_P, ADD_DELIVERIES, ADD_YARDS, CREATE_YARD, CREATE_DELIVERY, REMOVE_DELIVERY, SELECT_DELIVERY, UPDATE_DELIVERY, FILTER_DELIVERIES, FILTER_YARD } from './reducer/actions';
import { Yard } from './shared/yard.model';

interface AppState {
  deliveries: Delivery[];
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
  @ViewChild(DeliveryDetailComponent)
  private child: DeliveryDetailComponent;

  private processingFilters = [
    { friendly: "All", action: SHOW_ALL_P },
    { friendly: "Processed", action: SHOW_PROCESSED },
    { friendly: "Not Processed", action: SHOW_NOT_PROCESSED }
  ];
  private registrationFilters = [
    { friendly: "All", action: SHOW_ALL_R },
    { friendly: "Registered", action: SHOW_REGISTERED },
    { friendly: "Not Registered", action: SHOW_NOT_REGISTERED }
  ];
  private processingStatus;
  private processingStatusSubscription;
  private registrationStatus;
  private registrationStatusSubscription;
  private yardStatus;
  private yardStatusSubscription;
  private subscription;

  private deliveries: Observable<Delivery[]>;
  private selectedDelivery: Observable<Delivery>;
  private yards: Observable<Yard[]>;
  private selectedYard: Yard;

  private processingFilter: Observable<String>;
  private registrationFilter: Observable<String>;
  private yardFilter: Observable<String>;

  constructor(
    private deliveryService: DeliveryService,
    private store: Store<AppState>
  ) {
    this.deliveries = store.select(state => state.deliveries);
    this.selectedDelivery = store.select(state => state.selectedDelivery);
    this.yards = store.select(state => state.yards);

    this.processingFilter = store.select(state => state.processingFilter);
    this.registrationFilter = store.select(state => state.registrationFilter);
    this.yardFilter = store.select(state => state.yardFilter);

    this.deliveryService.getDeliveries()
      .map(payload => ({ type: ADD_DELIVERIES, payload }))
      .subscribe(action => this.store.dispatch(action));
    this.deliveryService.getYards()
      .map(payload => ({ type: ADD_YARDS, payload }))
      .subscribe(action => this.store.dispatch(action));

    this.yards.subscribe((yards) => {
      this.selectedYard = yards[0];
    });

    this.processingStatus = SHOW_ALL_P;
    this.registrationStatus = SHOW_ALL_R;

    this.subscription = this.store
      .select('processingFilter')
      .subscribe(processingFilter => this.processingStatusSubscription = processingFilter);
    this.subscription = this.store
      .select('registrationFilter')
      .subscribe(registrationFilter => this.registrationStatusSubscription = registrationFilter);
    this.subscription = this.store
      .select('yardFilter')
      .subscribe(yardFilter => this.yardStatusSubscription = yardFilter);
  }

  createDelivery(): void {
    let yardDeliveries = [];
    this.yards.subscribe((yards) => {
      yards.filter(yard => yard.name !== 'All').map(yard => {
        yardDeliveries.push(this.deliveryService.createYardDelivery(yard));
      });
    });
    this.store.dispatch({ type: CREATE_DELIVERY, payload: { id: id(), yardDeliveries } });

    this.deliveries.subscribe((deliveries) => {
      this.selectDelivery(deliveries[0]);
    });
    this.child.newDeliveryFocusEventEmitter.emit(true);
  }

  removeDelivery(delivery: Delivery) {
    this.store.dispatch({ type: REMOVE_DELIVERY, payload: delivery });
  }

  selectDelivery(delivery: Delivery) {
    this.store.dispatch({ type: SELECT_DELIVERY, payload: delivery });
  }

  updateDelivery(delivery: Delivery) {
    let headers = this.deliveryService.createHeaders('application/json');
    let options = this.deliveryService.createRequestOptions(headers);
    this.deliveryService.submitDelivery(delivery, options)
      .subscribe(action => this.store.dispatch({ type: UPDATE_DELIVERY, payload: delivery }));
    this.selectDelivery(delivery);
  }

  updateProcessingFilter(filter) {
    this.store.dispatch({ type: filter });
    this.deliveries.subscribe((deliveries) => {
      this.selectDelivery(deliveries
        .filter(this.registrationStatusSubscription)
        .filter(this.processingStatusSubscription)
        .filter(this.yardStatusSubscription)[0]);
    });
  }

  updateRegistrationFilter(filter) {
    this.store.dispatch({ type: filter });
    this.deliveries.subscribe((deliveries) => {
      this.selectDelivery(deliveries
        .filter(this.registrationStatusSubscription)
        .filter(this.processingStatusSubscription)
        .filter(this.yardStatusSubscription)[0]);
    });
  }

  updateYardFilter() {
    this.store.dispatch({ type: FILTER_YARD, payload: this.selectedYard });
    this.deliveries.subscribe((deliveries) => {
      this.selectDelivery(deliveries
        .filter(this.registrationStatusSubscription)
        .filter(this.processingStatusSubscription)
        .filter(this.yardStatusSubscription)[0]);
    });
  }

  filterDeliveries() {
    this.store.dispatch({ type: FILTER_DELIVERIES, payload: this.processingFilter });
    this.store.dispatch({ type: FILTER_DELIVERIES, payload: this.registrationFilter });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(){
    this.deliveries.subscribe((deliveries) => {
      this.selectDelivery(deliveries[0]);
    });
  }
}
