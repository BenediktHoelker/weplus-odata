import { Deviation } from './deviation.model';
import { YardDelivery } from './yard-delivery.model';

export class Delivery {
  _id: Number;
  carrier: string;
  deviations: Deviation[];
  isRegistered: boolean;
  isProcessed: boolean;
  supplier: string;
  timeslotBegin: Date;
  timeslotEnd: Date;
  get quantity(): number {
    return this.yardDeliveries.reduce((prev, current) => prev + current.quantity, 0);
  }
  yardDeliveries: YardDelivery[];

  constructor() {
    this.deviations = [];
    this.yardDeliveries = [];
  }
}

