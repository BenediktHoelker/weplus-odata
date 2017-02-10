import { Component, EventEmitter, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Delivery } from './models/delivery';
import { DeviationType } from './models/deviation-type';
import { Filter } from './models/filter';
import { FilterGroup } from './models/filter-group';
import { Yard } from './models/yard';

import { normalize } from 'normalizr';
import { deliverySchema, deviationTypeSchema, yardSchema } from './models/schemas';
import { DeliveryDetailComponent } from './containers/delivery-detail';
import { DeliveryService } from './shared/delivery.service';
import {
  CREATE_DELIVERY, REMOVE_DELIVERY, SELECT_DELIVERY, UPDATE_DELIVERY,
} from './reducers/actions';

import * as fromRoot from './reducers';
import * as delivery from './actions/delivery';
import * as deviation from './actions/deviation';
import * as deviationTypes from './actions/deviation-type';
import * as filter from './actions/filter';
import * as filterSeeds from './filter-seeds';
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

  private filtersVisible: boolean;
  private isLoading: boolean;
  private model$: Observable<any>;

  constructor(
    private deliveryService: DeliveryService,
    private store: Store<fromRoot.State>
  ) {
    this.store.dispatch(new filter.LoadSuccessAction(filterSeeds.processingPayload));
    this.store.dispatch(new filter.LoadSuccessAction(filterSeeds.registrationPayload));
    this.store.dispatch(new filter.LoadSuccessAction(filterSeeds.deviationPayload));
    this.store.dispatch(new filter.LoadSuccessAction(filterSeeds.locationPayload));

    this.model$ = Observable.combineLatest(
      this.store.select(fromRoot.getFilterGroups),
      (filterGroups) => {
        return {
          filterGroups
        }
      });
  }

  ngOnInit() {
    this.filtersVisible = true;
  }

  // createDelivery(): void {
  //   this.selectDelivery();
  //   this.store.dispatch({ type: CREATE_DELIVERY, payload: { yardDeliveries: this.yardDeliveries } });
  //   this.detailComponent.newDeliveryFocusEventEmitter.emit(true);
  // }

  openSidenav(): void {
    this.sidenav.open();
  }

  toggleFilterBar(): void {
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
    const filter = filterGroup.filterEntities[filterGroup.selectedFilterId];
    this.store.dispatch({ type: filter.actionType, payload: filter.payload });
  }
}
