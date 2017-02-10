import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import { Delivery } from '../models/delivery';

@Component({
  selector: 'wp-sidenav-delivery-list',
  template: `
    <md-nav-list>
    <a md-list-item *ngFor="let delivery of deliveries"
      (click)="selectDelivery.emit(delivery.id)">
      <h3 md-line fxLayout="row" fxLayoutAlign="space-between center">
        <span>
          <span>{{delivery.carrier}}</span>
          <span class="sidenav-supplier" *ngIf="delivery.carrier && delivery.supplier"> ({{delivery.supplier}})</span>
        </span>
        <span style="margin-left:0.5em"*ngIf="delivery.quantity"> [{{delivery.quantity}}]</span>
      </h3>
      <p md-line *ngIf="delivery.timeslotBegin && delivery.timeslotEnd">
        <span>{{delivery.timeslotBegin | date:'shortTime'}} - {{delivery.timeslotEnd | date:'shortTime' }} </span>
      </p>
    </a>
    </md-nav-list>
  `,
  styles: [`
    md-nav-list {
      padding: 10px;
      width: 300px;
    }
  `]
})
export class SidenavDeliveryListComponent {
  @Input() deliveries: Delivery[];
  @Output() selectDelivery = new EventEmitter<number>();
}
