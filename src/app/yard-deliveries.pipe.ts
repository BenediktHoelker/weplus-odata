import { Pipe, PipeTransform } from '@angular/core';

import { Delivery } from './shared/delivery.model';
import { Yard } from './shared/yard.model';

@Pipe({ name: 'yardDeliveries' })
export class YardDeliveriesPipe implements PipeTransform {
  transform(allDeliveries: Delivery[], selectedYard: Yard) {
    console.log(selectedYard.id);
    return allDeliveries.filter(delivery => !delivery.isRegistered)
      .filter(delivery => delivery.yards.find(yard => (yard.id == selectedYard.id && yard.quantity > 0)));
  }
}