import { Deviation } from './deviation.model';

export class Delivery {
  carrier: string;
  deviations: Deviation[];
  isRegistered: boolean;
  isProcessed: boolean;
  quantity: number;
  supplier: string;
}
