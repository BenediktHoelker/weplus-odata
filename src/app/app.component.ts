import { Component, EventEmitter, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { denormalize } from 'normalizr';

import { Delivery } from './models/delivery';
import { DeviationType } from './models/deviation-type';
import { Filter } from './models/filter';
import { FilterGroup } from './models/filter-group';
import { Yard } from './models/yard';

import { normalize } from 'normalizr';
import { deliverySchema, deviationTypeSchema, yardSchema } from './models/schemas';
import { DeliveryDetailComponent } from './containers/delivery-detail';
import { DeliveryService } from './shared/delivery.service';

import * as fromRoot from './reducers';
import * as delivery from './actions/delivery';
import * as deviation from './actions/deviation';
import * as deviationTypes from './actions/deviation-type';
import * as filter from './actions/filter';
import * as filterSeeds from './filter-seeds';
import * as yard from './actions/yard';
import * as layout from './actions/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "WEPLUS";
  @ViewChild(DeliveryDetailComponent) private detailComponent: DeliveryDetailComponent;

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
      this.store.select(fromRoot.getYardDeliveryEntities),
      this.store.select(fromRoot.getDeviationEntities),
      this.store.select(fromRoot.getDeviationTypeEntities),
      this.store.select(fromRoot.getYardEntities),
      this.store.select(fromRoot.getDeliveryArray),
      this.store.select(fromRoot.getShowSidenav),
      this.store.select(fromRoot.getShowFilterbar),
      this.store.select(s => s.appliedFilters),
      (filterGroups, yardDeliveries, deviations, deviationTypes, yards, deliveries, showSidenav, showFilterbar, appliedFilters) => {
        const denormalizedDeliveries = denormalize(deliveries, [deliverySchema], {
          yardDeliveries, deviations, deviationTypes, yards
        });

        return {
          filterGroups: filterGroups,
          deliveries: denormalizedDeliveries
            .filter(appliedFilters.processing)
            .filter(appliedFilters.registration)
            .filter(appliedFilters.deviation)
            .filter(appliedFilters.location),
          showSidenav: showSidenav,
          showFilterbar: showFilterbar
        }
      });
  }

  createDelivery(): void {
    this.store.dispatch(new delivery.CreateAction());
  }

  toggleFilterbar(): void {
    this.store.dispatch(new layout.ToggleFilterbarAction());
  }

  selectDelivery(deliveryId: number): void {
    this.store.dispatch(new delivery.SelectDeliveryAction(deliveryId));
  }

  updateFilter(filterGroup) {
    const filter = filterGroup.filterEntities[filterGroup.selectedFilterId];
    this.store.dispatch({ type: filter.actionType, payload: filter.payload });
  }

  closeSidenav() {
    this.store.dispatch(new layout.CloseSidenavAction());
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenavAction());
  }
}
