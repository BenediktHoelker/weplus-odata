import 'rxjs/add/operator/startWith';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { normalize } from 'normalizr';
import { of } from 'rxjs/observable/of';

import * as status from '../actions/status';
import { DeliveryService } from '../shared/delivery.service';
import { deliverySchema } from '../models/schemas';

@Injectable()
export class StatusEffects {
  constructor(private actions$: Actions, private deliveryService: DeliveryService,
  ) { }

  @Effect()
  loadStatus$: Observable<Action> = this.actions$
    .ofType(status.ActionTypes.LOAD)
    .startWith(new status.LoadAction())
    .switchMap(() =>
      this.deliveryService.getDeliveries()
        .map(payload => normalize(payload, [deliverySchema]))
        .map(payload => new status.LoadSuccessAction(payload))
        .catch(error => of(new status.LoadFailAction(error)))
    );
}