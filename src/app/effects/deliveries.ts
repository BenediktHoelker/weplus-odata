import 'rxjs/add/operator/startWith';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { normalize } from 'normalizr';
import { of } from 'rxjs/observable/of';

import * as delivery from '../actions/delivery';
import * as deviation from '../actions/deviation';
import * as status from '../actions/status';
import * as yardDelivery from '../actions/yard-delivery';

import { Delivery } from '../models/delivery.model';
import { DeliveryService } from '../shared/delivery.service';
import { deliverySchema } from '../models/schemas';

@Injectable()
export class DeliveryEffects {
  constructor(private actions$: Actions, private deliveryService: DeliveryService,
  ) { }

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect()
  loadDeliveries$: Observable<Action> = this.actions$
    .ofType(delivery.ActionTypes.LOAD)
    .startWith(new delivery.LoadAction())
    .switchMap(() =>
      this.deliveryService.getDeliveries()
        .map(payload => {
          console.log(payload);
          console.log(normalize(payload, [deliverySchema]));
          return normalize(payload, [deliverySchema]);
        })
        .map(payload => new delivery.LoadSuccessAction(payload))
        .catch(error => of(new delivery.LoadFailAction(error)))
    );
}