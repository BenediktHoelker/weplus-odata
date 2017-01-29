import { Deviation } from './deviation.model';
import { Status } from './status.model';
import { YardDelivery } from './yard-delivery.model';

export class Delivery {
  _id: Number;
  carrier: string;
  deviations: Deviation[];
  get quantity(): number {
    return this.yardDeliveries.reduce((prev, current) => prev + current.quantity, 0);
  };
  status: Status;
  supplier: string;
  timeslotBegin: Date;
  timeslotEnd: Date;
  yardDeliveries: YardDelivery[];

  constructor() {
    this.deviations = [];
    this.yardDeliveries = [];
  }
}

