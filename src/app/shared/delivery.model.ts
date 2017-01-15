import { Deviation } from './deviation.model';
import { YardDelivery } from './yard-delivery.model';

export class Delivery {
  id: Number;
  carrier: string;
  deviations: Deviation[];
  isRegistered: boolean;
  isProcessed: boolean;
  quantity: number;
  supplier: string;
  timeslotBegin: Date;
  timeslotEnd: Date;
  yardDeliveries: YardDelivery[];

  constructor() {
    this.deviations = [];
    this.yardDeliveries = [];
  }
}

