import { Yard } from './yard.model';
import { Status } from './status.model';

export class YardDelivery {
    _id: number;
    yard: Yard;
    quantity: number;
    status: Status;

    constructor(){
        this.status = new Status();
        this.quantity = 0;
    }
}
