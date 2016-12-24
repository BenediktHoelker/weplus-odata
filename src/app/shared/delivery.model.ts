import { Deviation } from './deviation.model';
import { Yard } from './yard.model';

export class Delivery {
  carrier: string;
  deviations: Deviation[];
  isRegistered: boolean;
  isProcessed: boolean;
  quantity: number;
  supplier: string;
  timeslotBegin: Date;
  timeslotEnd: Date;
  yards: Yard[];

  constructor() {
    this.deviations = [];
    this.yards = [];
  }
}

