import 'rxjs/add/operator/startWith';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { normalize, denormalize } from 'normalizr';
import { of } from 'rxjs/observable/of';

import * as delivery from '../actions/delivery';

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
        .map(payload => normalize(payload, [deliverySchema]))
        .map(payload => new delivery.LoadSuccessAction(payload))
        .catch(error => of(new delivery.LoadFailAction(error)))
    );

  @Effect()
  createDelivery$: Observable<Action> = this.actions$
    .ofType(delivery.ActionTypes.CREATE_DELIVERY)
    .mergeMap(() =>
      this.deliveryService.createDelivery()
        .map(payload => normalize(payload, deliverySchema))
        .map((payload) => new delivery.CreateSuccessAction(payload))
        .catch((payload) => of(new delivery.CreateFailAction(payload)))
    );

  @Effect()
  removeDelivery$: Observable<Action> = this.actions$
    .ofType(delivery.ActionTypes.REMOVE_DELIVERY)
    .map((action: delivery.RemoveAction) => action.payload)
    .mergeMap(deliveryId =>
      this.deliveryService.removeDelivery(deliveryId)
        .map(payload => normalize(payload, deliverySchema))
        .map((payload) => new delivery.RemoveSuccessAction(payload))
        .catch((payload) => of(new delivery.RemoveFailAction(payload)))
    );

  @Effect()
  updateDelivery$: Observable<Action> = this.actions$
    .ofType(delivery.ActionTypes.SUBMIT_DELIVERY)
    .map((action: delivery.SubmitAction) => action.payload)
    .map(updateModel => denormalize(updateModel.selectedDelivery, deliverySchema, updateModel))
    .mergeMap(deliveryToSubmit => {
      return this.deliveryService.submitDelivery(deliveryToSubmit)
        .map(payload => {
          console.log(payload);
          return normalize(payload, deliverySchema)
        })
        .map((payload) => new delivery.SubmitSuccessAction(payload))
        .catch((payload) => of(new delivery.SubmitFailAction(payload)))
    });
}