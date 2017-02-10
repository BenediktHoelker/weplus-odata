
export class YardDelivery {
    id: number;
    yardName: string;
    isProcessed: boolean;
    isRegistered: boolean;
    quantity: number;

    constructor() {
        this.quantity = 0;
    }
}
