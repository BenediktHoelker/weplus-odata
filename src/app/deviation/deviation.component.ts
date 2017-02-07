import { Component, EventEmitter, AfterViewInit, Input, Output } from '@angular/core';

import { DeliveryService } from '../shared/delivery.service';
import { Deviation } from '../models/deviation.model';
import { DeviationType } from '../models/deviation-type.model';

@Component({
  selector: 'wp-deviation-tab',
  template: `
    <md-list-item *ngFor="let deviation of deviations">
      <div class="flex-container" fxLayout="row" fxLayoutAlign="space-between center">
        <md-select placeholder="Type" required [(ngModel)]="deviation.type">
         
        </md-select>
        <!--No [max]-binding, because it somehow breaks validation-->
        <md-input-container>
          <input mdInput class="form-control" type="number"
            placeholder="Gravity" [min]="1" required
            [(ngModel)]="deviation">
        </md-input-container>
        <button type="button" (click)="removeDeviation()"
          md-button><md-icon>delete</md-icon></button>
      </div>
      <div class="flex-container" fxLayout="row" fxLayoutAlign="end">
        <button type="button" (click)="addDeviation()"
          md-button><md-icon>add</md-icon></button>
      </div>
    </md-list-item>
  `
})
export class DeviationComponent implements AfterViewInit {
  @Input() deviationTypes: DeviationType[];
  @Input() deviations: Deviation[];

  constructor(
    private deliveryService: DeliveryService
  ) { }

  ngAfterViewInit() {
    /*
    Workaround for md-select: ngValue must point to the exact instance of the select-options
    */
    // if (this.selectedDeviation.type && this.deviationTypes.length) {
    //   this.selectedDeviation.type = this.deviationTypes.find(deviationType => {
    //     return deviationType.name === this.selectedDeviation.type;
    //   }).name;
    // }
  }

  // removeDeviation(): void {
  //   this.deliveryService.removeDeviation(this.deviation, this.deviations);
  // }
}
