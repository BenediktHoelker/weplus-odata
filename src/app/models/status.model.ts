import * as moment from 'moment';

export class Status {
  id: number;
  isProcessed: boolean;
  isRegistered: boolean;
  isValid: boolean;
  processingMessage: string;
  registrationMessage: string;
  timestampProcessing: moment.Moment;
  timestampRegistration: moment.Moment;

  checkValidity(): boolean {
    let isValid: boolean;
    isValid = !(this.isProcessed && !this.isRegistered);
    return isValid;
  }
  // get isProcessed(){
  //   return this._isProcessed;
  // }
  // get isRegistered(){
  //   return this._isRegistered;
  // }
  // set isProcessed (value: boolean) {
  //   this.timestampProcessing = moment();
  //   this.setProcessingMessage();
  // };
  // set isRegistered (value: boolean) {
  //   this.timestampRegistration = moment();
  //   this.setRegistrationMessage();
  //   this.setProcessingMessage();
  // };
  // setProcessingMessage() {
  //   this.processingMessage = this.isProcessed
  //     ? "Processed at " + this.timestampProcessing.format('LT')
  //     : (this.isRegistered ? "Being Processed" : "Not Processed");
  // }
  // setRegistrationMessage() {
  //   this.registrationMessage = this.isRegistered
  //     ? "Registered at " + this.timestampRegistration.format('LT')
  //     : "Not Registered";
  // }

  // constructor() {
  //   this._isProcessed = false;
  //   this._isRegistered = false;
  //   this.processingMessage = "Not Processed";
  //   this.registrationMessage = "Not Registered";
  // }
}