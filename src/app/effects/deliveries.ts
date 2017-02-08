import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { normalize } from 'normalizr';

import * as delivery from '../actions/delivery';
import { Delivery } from '../models/delivery.model';
import { DeliveryService } from '../shared/delivery.service';
import { deliverySchema, deviationTypeSchema, yardSchema } from '../models/schemas';

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
    );

  // @Effect()
  // addBookToCollection$: Observable<Action> = this.actions$
  //   .ofType(collection.ActionTypes.ADD_BOOK)
  //   .map((action: collection.AddBookAction) => action.payload)
  //   .mergeMap(book =>
  //     this.db.insert('books', [book])
  //       .map(() => new collection.AddBookSuccessAction(book))
  //       .catch(() => of(new collection.AddBookFailAction(book)))
  //   );


  // @Effect()
  // removeBookFromCollection$: Observable<Action> = this.actions$
  //   .ofType(collection.ActionTypes.REMOVE_BOOK)
  //   .map((action: collection.RemoveBookAction) => action.payload)
  //   .mergeMap(book =>
  //     this.db.executeWrite('books', 'delete', [book.id])
  //       .map(() => new collection.RemoveBookSuccessAction(book))
  //       .catch(() => of(new collection.RemoveBookFailAction(book)))
  //   );
}