import 'rxjs/add/operator/startWith';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { normalize } from 'normalizr';
import { of } from 'rxjs/observable/of';

import * as filter from '../actions/filter';
import { DeliveryService } from '../shared/delivery.service';
import { filterSchema } from '../models/schemas';

@Injectable()
export class DeviationTypeEffects {
  constructor(private actions$: Actions, private deliveryService: DeliveryService,
  ) { }

  @Effect()
  loadDeviationTypes$: Observable<Action> = this.actions$
    .ofType(filter.ActionTypes.LOAD)
    .startWith(new filter.LoadAction())
    .switchMap(() =>
      this.deliveryService.getDeviationTypes()
        .map(payload => normalize(payload, [filterSchema]))
        .map(payload => new filter.LoadSuccessAction(payload))
        .catch(error => of(new filter.LoadFailAction(error)))
    );
}