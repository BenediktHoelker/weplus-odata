import { Deviation } from './deviation.model';
import { Status } from './status.model';
import { YardDelivery } from './yard-delivery.model';

export class Delivery {
  id: number;
  carrier: string;
  deviations: Deviation[];
  status: Status;
  supplier: string;
  timeslotBegin: Date;
  timeslotEnd: Date;
  yardDeliveries: YardDelivery[];

  get activeYardDeliveries(): YardDelivery[]{
    return this.yardDeliveries.filter(yardDelivery => yardDelivery.quantity >> 0);
  }
  get quantity(): number {
    return this.yardDeliveries.reduce((prev, current) => prev + current.quantity, 0);
  };

  checkValidity(): boolean {
    let formIsValid: boolean;
    formIsValid = this.status.checkValidity()
      && this.yardDeliveries.every(yardDelivery => yardDelivery.status.checkValidity());
    return formIsValid;
  }

  constructor() {
    this.deviations = [];
    this.yardDeliveries = new Array<YardDelivery>();
    this.status = new Status();
  }
}

