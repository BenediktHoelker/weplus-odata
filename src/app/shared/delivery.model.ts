import { Deviation } from './deviation.model';
import { Yard } from './yard.model';

export class Delivery {
  carrier: string;
  deviations: Deviation[];
  isRegistered: boolean;
  isProcessed: boolean;
  supplier: string;
  yards: Yard[];

  constructor(){
    this.deviations = [];
    this.yards = [];
  }
}

