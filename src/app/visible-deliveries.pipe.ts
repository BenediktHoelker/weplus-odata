import { Pipe, PipeTransform } from '@angular/core';
import { Delivery } from './shared/delivery.model';

@Pipe({
    name: 'visibleDeliveries'
})
export class VisibleDeliveriesPipe implements PipeTransform {
    transform(deliveries, filter) {
        if (!deliveries) {
            return;
        };
        deliveries = [].concat(deliveries);

        return deliveries.filter(filter);
    }
}