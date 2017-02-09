import { Deviation } from './deviation.model';
import { Status } from './status.model';
import { YardDelivery } from './yard-delivery.model';
import * as moment from 'moment';

export class Delivery {
  _quantity: number;
  id: number;
  carrier: string;
  deviations: Deviation[];
  supplier: string;
  timeslotBegin: Date;
  timeslotEnd: Date;
  yardDeliveries: Delivery[];

  isProcessed: boolean;
  isRegistered: boolean;
  timestampProcessing: moment.Moment;
  timestampRegistration: moment.Moment;

  get activeYardDeliveries(): Delivery[] {
    return this.yardDeliveries.filter(yardDelivery => yardDelivery.quantity >> 0);
  }
  get quantity(): number {
    return this.yardDeliveries.length
      ? this.yardDeliveries.reduce((prev, current) => prev + current.quantity, 0)
      : this._quantity;
  };
  set quantity(value: number) {
    this._quantity = value;
  }

  // checkValidity(): boolean {
  //   let formIsValid: boolean;
  //   formIsValid = this.status.checkValidity()
  //     && this.yardDeliveries.every(yardDelivery => yardDelivery.status.checkValidity());
  //   return formIsValid;
  // }

  constructor() {
    this.deviations = [];
    this.yardDeliveries = new Array<Delivery>();
  }
}

