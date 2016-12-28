import { Pipe, PipeTransform } from '@angular/core';

import { Delivery } from './shared/delivery.model';

@Pipe({ name: 'registeredDeliveries' })
export class RegisteredDeliveriesPipe implements PipeTransform {
  transform(allDeliveries: Delivery[]) {
    return allDeliveries.filter(delivery => !delivery.isRegistered);
  }
}