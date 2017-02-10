import 'rxjs/add/operator/startWith';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { normalize } from 'normalizr';
import { of } from 'rxjs/observable/of';

import * as yardDelivery from '../actions/yard-delivery';
import { DeliveryService } from '../shared/delivery.service';
import { deliverySchema } from '../models/schemas';

@Injectable()
export class YardDeliveryEffects {
  constructor(private actions$: Actions, private deliveryService: DeliveryService,
  ) { }

  @Effect()
  loadYardDeliveries$: Observable<Action> = this.actions$
    .ofType(yardDelivery.ActionTypes.LOAD)
    .startWith(new yardDelivery.LoadAction())
    .switchMap(() =>
      this.deliveryService.getDeliveries()
        .map(payload => normalize(payload, [deliverySchema]))
        .map(payload => new yardDelivery.LoadSuccessAction(payload))
        .catch(error => of(new yardDelivery.LoadFailAction(error)))
    );
}