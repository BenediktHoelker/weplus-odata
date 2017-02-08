import { Component, EventEmitter, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Delivery } from './models/delivery.model';
import { DeviationType } from './models/deviation-type.model';
import { Filter } from './models/filter.model';
import { FilterGroup } from './models/filter-group.model';
import { Yard } from './models/yard.model';

import { normalize } from 'normalizr';
import { deliverySchema, deviationTypeSchema, yardSchema } from './models/schemas';
import { DeliveryDetailComponent } from './containers/delivery-detail';
import { DeliveryService } from './shared/delivery.service';
import {
  ADD_DEVIATION_TYPES, ADD_YARDS,
  CREATE_DELIVERY, REMOVE_DELIVERY, SELECT_DELIVERY, UPDATE_DELIVERY,
  CREATE_YARD, FILTER_YARD, SELECT_YARD,
  ADD_FILTERS, ADD_FILTER_GROUPS, SELECT_FILTER,
  FILTER_DEVIATION_TYPE, SHOW_ALL_D, SHOW_WITH_DEVIATION, SHOW_WITHOUT_DEVIATION,
  SHOW_ALL_P, SHOW_PROCESSED, SHOW_NOT_PROCESSED,
  SHOW_ALL_R, SHOW_REGISTERED, SHOW_NOT_REGISTERED,
  ADD_STATUSSES
} from './reducers/actions';

import * as fromRoot from './reducers';
import * as delivery from './actions/delivery';
import * as deviation from './actions/deviation';
import * as deviationTypes from './actions/deviation-type';
import * as status from './actions/status';
import * as yardDelivery from './actions/yard-delivery';
import * as yard from './actions/yard';

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
    private store: Store<fromRoot.State>
  ) {
    this.deliveryService.getDeliveries()
      .map(payload => normalize(payload, [deliverySchema]))
      .subscribe(normalizedPayload => {
        console.log(normalizedPayload);
        // this.store.dispatch(new delivery.FetchDeliveriesAction(normalizedPayload));
        this.store.dispatch(new status.FetchStatusAction(normalizedPayload));
        this.store.dispatch(new yardDelivery.FetchYardDeliveriesAction(normalizedPayload));
      });

    // this.deliveryService.getDeviationTypes()
    //   .map(payload => normalize(payload, [deviationTypeSchema]))
    //   .subscribe(normalizedPayload => {
    //     console.log(normalizedPayload);
    //     this.store.dispatch(new deviationTypes.FetchDeviationTypesAction(normalizedPayload));
    //   });

    this.deliveryService.getYards()
      .map(payload => normalize(payload, [yardSchema]))
      .subscribe(normalizedPayload => {
        console.log(normalizedPayload);
        this.store.dispatch(new yard.FetchYardsAction(normalizedPayload));
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

  openSidenav(): void {
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


  updateFilter(filterGroup) {
    this.selectDelivery();
    this.store.dispatch({
      type: SELECT_FILTER,
      payload: { type: filterGroup.type, selectedFilterId: filterGroup.selectedFilterId }
    });
    this.store.dispatch({ type: filterGroup.filters.find(filter => filter._id === filterGroup.selectedFilterId).type });
  }

  updateYardFilter(yard: Yard) {
    this.selectDelivery();
    this.store.dispatch({ type: SELECT_YARD, payload: yard });
    this.store.dispatch({ type: FILTER_YARD, payload: yard });
  }
}
