import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visibleDeliveries'
})
export class VisibleDeliveriesPipe implements PipeTransform {
  transform(deliveries, filter) {
    console.log(deliveries);
    console.log("DeliveriesPipe " + deliveries + " " + filter);
    if (!deliveries) {
      console.log("No deliveries");
      return;
    };
    return deliveries.filter(filter);
  }
}