import 'rxjs/add/operator/startWith';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { normalize } from 'normalizr';
import { of } from 'rxjs/observable/of';

import * as yard from '../actions/yard';
import { DeliveryService } from '../shared/delivery.service';
import { yardSchema } from '../models/schemas';

@Injectable()
export class YardEffects {
  constructor(private actions$: Actions, private deliveryService: DeliveryService,
  ) { }

  @Effect()
  loadYards$: Observable<Action> = this.actions$
    .ofType(yard.ActionTypes.LOAD)
    .startWith(new yard.LoadAction())
    .switchMap(() =>
      this.deliveryService.getYards()
        .map(payload => normalize(payload, [yardSchema]))
        .map(payload => new yard.LoadSuccessAction(payload))
        .catch(error => of(new yard.LoadFailAction(error)))
    );
}