import * as moment from 'moment';

export class Status {
  isProcessed: boolean;
  isRegistered: boolean;
  isValid: boolean;
  processingMessage: string;
  registrationMessage: string;
  timestampProcessing: moment.Moment;
  timestampRegistration: moment.Moment;

  checkValidity(): boolean{
    let isValid: boolean;
    isValid = !(this.isProcessed && !this.isRegistered);
    return isValid;
  }
  setProcessed(value?: boolean) {
    this.isProcessed = (value === false) ? false : !this.isProcessed;
    this.timestampProcessing = moment();
    this.setProcessingMessage();
  };
  setRegistered() {
    this.isRegistered = !this.isRegistered;
    this.timestampRegistration = moment();
    this.timestampProcessing = moment();
    this.setRegistrationMessage();
    this.setProcessingMessage();
  };
  setProcessingMessage() {
    this.processingMessage = this.isProcessed
      ? "Processed at " + this.timestampProcessing.format('LT')
      : (this.isRegistered ? "Being Processed" : "Not Processed");
  }
  setRegistrationMessage() {
    this.registrationMessage = this.isRegistered
      ? "Registered at " + this.timestampRegistration.format('LT')
      : "Not Registered";
  }
}