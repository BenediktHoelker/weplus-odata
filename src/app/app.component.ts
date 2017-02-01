import { Component, EventEmitter, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Delivery } from './models/delivery.model';
import { DeviationType } from './models/deviation-type.model';
import { Filter } from './models/filter.model';
import { FilterGroup } from './models/filter-group.model';
import { Yard } from './models/yard.model';

import { AppState } from './app.state';
import { DeliveryDetailComponent } from './delivery-detail/delivery-detail.component';
import { DeliveryService } from './shared/delivery.service';
import {
  ADD_DELIVERIES, ADD_DEVIATION_TYPES, ADD_YARDS,
  CREATE_DELIVERY, REMOVE_DELIVERY, SELECT_DELIVERY, UPDATE_DELIVERY,
  CREATE_YARD, FILTER_YARD, SELECT_YARD,
  ADD_FILTERS, ADD_FILTER_GROUPS, SELECT_FILTER,
  FILTER_DEVIATION_TYPE, SHOW_ALL_D, SHOW_WITH_DEVIATION, SHOW_WITHOUT_DEVIATION,
  SHOW_ALL_P, SHOW_PROCESSED, SHOW_NOT_PROCESSED,
  SHOW_ALL_R, SHOW_REGISTERED, SHOW_NOT_REGISTERED
} from './reducers/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "WEPLUS";
  @ViewChild(DeliveryDetailComponent) private detailComponent: DeliveryDetailComponent;
  @ViewChild('sidenav') sidenav: MdSidenav;

  public model;
  private filtersVisible: boolean;
  private isLoading: boolean;
  private subscription;
  private yardDeliveries = [];

  constructor(
    private deliveryService: DeliveryService,
    private store: Store<AppState>
  ) {
    this.deliveryService.getDeliveries()
      .map(payload => ({ type: ADD_DELIVERIES, payload }))
      .subscribe(action => this.store.dispatch(action));
    this.deliveryService.getYards()
      .map(payload => ({ type: ADD_YARDS, payload }))
      .subscribe(action => this.store.dispatch(action));
    this.deliveryService.getDeviationTypes()
      .map(payload => ({ type: ADD_DEVIATION_TYPES, payload }))
      .subscribe(action => this.store.dispatch(action));

    let filterGroups = [
      {
        type: "Filter Processing", filters:
        [{ id: 0, friendly: "All", type: SHOW_ALL_P },
        { id: 1, friendly: "Processed", type: SHOW_PROCESSED },
        { id: 2, friendly: "Not Processed", type: SHOW_NOT_PROCESSED }],
        selectedFilterId: 0
      },
      {
        type: "Filter Registration", filters:
        [{ id: 0, friendly: "All", type: SHOW_ALL_R },
        { id: 1, friendly: "Registered", type: SHOW_REGISTERED },
        { id: 2, friendly: "Not Registered", type: SHOW_NOT_REGISTERED }],
        selectedFilterId: 0
      },
      {
        type: "Filter Deviations", filters: [], selectedFilterId: 0
      },
    ];

    this.store.dispatch({ type: ADD_FILTER_GROUPS, payload: filterGroups });

    /*
     * Create yard deliveries for creating new deliveries later
     */
    this.subscription = this.store
      .select('yards')
      .subscribe((yards: Yard[]) => {
        yards.filter(yard => yard.name !== 'All')
          .map(yard => {
            this.yardDeliveries.push(this.deliveryService.createYardDelivery(yard));
          });
      });

    /*
     * Push a new filter entry foreach type of deviation
     * TODO: find a better way
     */
    let index = 3;
    let filter = {};
    let payload = { type: "Filter Deviations", filters: [] };
    payload.filters.push(...[{ id: 0, friendly: "All", type: SHOW_ALL_D },
        { id: 1, friendly: "With Deviation", type: SHOW_WITH_DEVIATION },
        { id: 2, friendly: "Without Deviation", type: SHOW_WITHOUT_DEVIATION }]);
    this.subscription = this.store
      .select('deviationTypes')
      .subscribe((deviationTypes: DeviationType[]) => {
        deviationTypes.map(
          deviationType => {
            filter = { id: index++, friendly: deviationType.name + " Deviation", type: FILTER_DEVIATION_TYPE, payload: deviationType.name }
            payload.filters.push(filter);
          });
        this.store.dispatch({ type: ADD_FILTERS, payload });
      },
      (err) => console.log(err),
      () => {
      });

    this.model = Observable.combineLatest(
      store.select(s => s.deliveries),
      store.select(s => s.deviationFilter),
      store.select(s => s.deviationTypes),
      store.select(s => s.filterGroups),
      store.select(s => s.processingFilter),
      store.select(s => s.registrationFilter),
      store.select(s => s.selectedDelivery),
      store.select(s => s.selectedYard),
      store.select(s => s.yardFilter),
      store.select(s => s.yards),
      (deliveries, deviationFilter, deviationTypes, filterGroups, processingFilter, registrationFilter, selectedDelivery, selectedYard, yardFilter, yards) => {
        return {
          deliveries: deliveries
            .filter(deviationFilter)
            .filter(processingFilter)
            .filter(registrationFilter)
            .filter(yardFilter),
          deviationFilter: deviationFilter,
          deviationTypes: deviationTypes,
          filterGroups,
          processingFilter,
          registrationFilter,
          selectedDelivery: selectedDelivery || deliveries
            .filter(deviationFilter)
            .filter(processingFilter)
            .filter(registrationFilter)
            .filter(yardFilter)[0],
          selectedYard: selectedYard || yards[0],
          yardFilter,
          yards
        }
      });
  }

  ngOnInit() {
    this.filtersVisible = true;
  }

  createDelivery(): void {
    this.selectDelivery();
    this.store.dispatch({ type: CREATE_DELIVERY, payload: { yardDeliveries: this.yardDeliveries } });
    this.detailComponent.newDeliveryFocusEventEmitter.emit(true);
  }

  openSidenav(): void{
    this.sidenav.open();
  }

  toggleFilters(): void {
    this.filtersVisible = !this.filtersVisible;
  }

  removeDelivery(delivery: Delivery) {
    this.selectDelivery();
    if (delivery.id) {
      this.deliveryService.removeDelivery(delivery)
        .subscribe(response => { this.store.dispatch({ type: REMOVE_DELIVERY, payload: delivery }); });
    }
    else {
      this.store.dispatch({ type: REMOVE_DELIVERY, payload: delivery });
    }
  }

  /*If no delivery is passed, the first delivery in the store is selected (c.f. constructor of AppComponent)*/
  selectDelivery(delivery?: Delivery) {
    this.store.dispatch({ type: SELECT_DELIVERY, payload: delivery });
  }

  updateDelivery(delivery: Delivery) {
    this.isLoading = true;
    this.deliveryService.submitDelivery(delivery)
      .do(val => this.isLoading = true)
      .subscribe(
      delivery => this.store.dispatch({ type: UPDATE_DELIVERY, payload: delivery }),
      err => console.log(err),
      () => { this.isLoading = false; });
    this.selectDelivery(delivery);
  }

  updateFilter(filterGroup) {
    this.selectDelivery();
    this.store.dispatch({
      type: SELECT_FILTER,
      payload: { type: filterGroup.type, selectedFilterId: filterGroup.selectedFilterId }
    });
    this.store.dispatch({ type: filterGroup.filters.find(filter => filter.id === filterGroup.selectedFilterId).type });
  }

  updateYardFilter(yard: Yard) {
    this.selectDelivery();
    this.store.dispatch({ type: SELECT_YARD, payload: yard });
    this.store.dispatch({ type: FILTER_YARD, payload: yard });
  }
}
