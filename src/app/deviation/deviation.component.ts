import { Component, EventEmitter, AfterViewInit, Input, Output } from '@angular/core';

import { DeliveryService } from '../shared/delivery.service';
import { Deviation } from '../models/deviation.model';
import { DeviationType } from '../models/deviation-type.model';

@Component({
  selector: 'app-deviation',
  templateUrl: './deviation.component.html',
  styleUrls: ['./deviation.component.css']
})
export class DeviationComponent implements AfterViewInit {
  @Input() selectedDeviation: Deviation;
  @Input() deviationTypes: DeviationType[];
  @Input() deviations: Deviation[];

  constructor(
    private deliveryService: DeliveryService
  ) { }

  ngAfterViewInit() {
    /*
    Workaround for md-select: ngValue must point to the exact instance of the select-options
    */
    if (this.selectedDeviation.type && this.deviationTypes.length) {
      this.selectedDeviation.type = this.deviationTypes.find(deviationType => {
        return deviationType.name === this.selectedDeviation.type;
      }).name;
    }
  }

  removeDeviation(): void {
    this.deliveryService.removeDeviation(this.selectedDeviation, this.deviations);
  }
}
