import { Component, OnInit, Input } from '@angular/core';

import { DeliveryService } from '../shared/delivery.service';
import { Deviation } from '../shared/deviation.model';
import { DeviationType } from '../shared/deviation-type.model';

@Component({
  selector: 'app-deviation',
  templateUrl: './deviation.component.html',
  styleUrls: ['./deviation.component.css']
})
export class DeviationComponent implements OnInit {
  @Input() selectedDeviation: Deviation;
  @Input() deviations: Deviation[];
  deviationTypes: DeviationType[];

  constructor(
    private deliveryService: DeliveryService
  ) { }

  getDeviationTypes(): void {
    this.deliveryService.getDeviationTypes().subscribe((deviationTypes) => { this.deviationTypes = deviationTypes; });
  }

  ngOnInit() {
    this.getDeviationTypes();
  }

  removeDeviation(): void {
    this.deliveryService.removeDeviation(this.selectedDeviation, this.deviations);
  }
}
