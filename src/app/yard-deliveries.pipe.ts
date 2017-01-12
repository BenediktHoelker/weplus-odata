import { Pipe, PipeTransform } from '@angular/core';

import { Delivery } from './shared/delivery.model';
import { Yard } from './shared/yard.model';

@Pipe({ name: 'yardDeliveries' })
export class YardDeliveriesPipe implements PipeTransform {
  transform(allDeliveries, selectedYard: Yard) {
    if (!allDeliveries)
      return allDeliveries

    if (!selectedYard)
      return allDeliveries;

    if (selectedYard.name === 'All')
      return allDeliveries;

    return allDeliveries.filter(delivery => delivery.yardDeliveries.find(yardDelivery =>
      (yardDelivery.yard.id == selectedYard.id && yardDelivery.quantity > 0)));
  }
}