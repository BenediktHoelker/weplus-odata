import { Component, OnInit, Input } from '@angular/core';

import { DeliveryService } from '../shared/delivery.service';
import { Deviation } from '../shared/deviation.model';

@Component({
  selector: 'app-deviation',
  templateUrl: './deviation.component.html',
  styleUrls: ['./deviation.component.css']
})
export class DeviationComponent implements OnInit {
  @Input() selectedDeviation: Deviation;
  @Input() deviations: Deviation[];

  constructor(
    private deliveryService: DeliveryService
  ) { }

  ngOnInit() {
  }

  removeDeviation(): void {
    this.deliveryService.removeDeviation(this.selectedDeviation, this.deviations);
  }
}
