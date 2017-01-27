import { Deviation } from './deviation.model';
import { YardDelivery } from './yard-delivery.model';
import * as moment from 'moment';

export class Delivery {
  _id: Number;
  _isRegistered: boolean;
  _isProcessed: boolean;
  carrier: string;
  deviations: Deviation[];
  get isRegistered() {
    return this._isRegistered;
  };
  set isRegistered(value) {
    this._isRegistered = value;
    this.timestampRegistration = moment().format('LLLL');
    this.setRegistrationMessage();
    this.setProcessingMessage();
    if(!this._isRegistered)
    {
      this.isProcessed = false;
    }
  };
  get isProcessed() {
    return this._isProcessed;
  };
  set isProcessed(value) {
    this._isProcessed = value;
    this.timestampProcessing = moment().format('LLLL');
    this.setProcessingMessage();
  };
  registrationMessage: String;
  processingMessage: String;
  supplier: string;
  timeslotBegin: Date;
  timeslotEnd: Date;
  timestampRegistration;
  timestampProcessing;
  get quantity(): number {
    return this.yardDeliveries.reduce((prev, current) => prev + current.quantity, 0);
  };
  yardDeliveries: YardDelivery[];

  constructor() {
    this.deviations = [];
    this.yardDeliveries = [];
  }

  setRegistrationMessage() {
    this.registrationMessage = this.isRegistered
      ? "Registered on " + this.timestampRegistration
      : "Not Registered";
  }
  setProcessingMessage() {
    this.processingMessage = this.isProcessed
      ? "Processing completed on " + this.timestampProcessing
      : (this.isRegistered ? "Being Processed" : "Not Processed");
  }
}

