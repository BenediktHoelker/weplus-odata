import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visibleDeliveries'
})
export class VisibleDeliveriesPipe implements PipeTransform {
  transform(deliveries, filter) {
    console.log("DeliveriesPipe" + filter);
    if (!deliveries) {
      console.log("No deliveries");
      return;
    };
    return deliveries.filter(filter);
  }

  private getVisibleDeliveries(deliveries, filter) {
    switch (filter) {
      case 'SHOW_ACTIVE':
        {
          console.log("Hallo" + deliveries.filter(d => !d.isProcessed));
          return deliveries.filter(d => !d.isProcessed);
        }
      case 'SHOW_COMPLETED':
        return deliveries.filter(d => d.isProcessed);
      case 'SHOW_ALL':
      default:
        return deliveries;
    }
  };
}