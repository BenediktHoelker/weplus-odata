import 'rxjs/add/operator/startWith';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { normalize } from 'normalizr';
import { of } from 'rxjs/observable/of';

import * as deviationType from '../actions/deviation-type';
import { DeliveryService } from '../shared/delivery.service';
import { deviationTypeSchema } from '../models/schemas';

@Injectable()
export class DeviationTypeEffects {
  constructor(private actions$: Actions, private deliveryService: DeliveryService,
  ) { }

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect()
  loadDeviationTypes$: Observable<Action> = this.actions$
    .ofType(deviationType.ActionTypes.LOAD)
    .startWith(new deviationType.LoadAction())
    .switchMap(() =>
      this.deliveryService.getDeviationTypes()
        .map(payload => normalize(payload, [deviationTypeSchema]))
        .map(payload => new deviationType.LoadSuccessAction(payload))
        .catch(error => of(new deviationType.LoadFailAction(error)))
    );
}