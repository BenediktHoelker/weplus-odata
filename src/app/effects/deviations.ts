import 'rxjs/add/operator/startWith';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { normalize } from 'normalizr';
import { of } from 'rxjs/observable/of';

import * as deviation from '../actions/deviation';
import { DeliveryService } from '../shared/delivery.service';
import { deliverySchema } from '../models/schemas';

@Injectable()
export class DeviationEffects {
  constructor(private actions$: Actions, private deliveryService: DeliveryService,
  ) { }

  @Effect()
  loadDeviations$: Observable<Action> = this.actions$
    .ofType(deviation.ActionTypes.LOAD)
    .startWith(new deviation.LoadAction())
    .switchMap(() =>
      this.deliveryService.getDeliveries()
        .map(payload => normalize(payload, [deliverySchema]))
        .map(payload => new deviation.LoadSuccessAction(payload))
        .catch(error => of(new deviation.LoadFailAction(error)))
    );
}