import * as moment from 'moment';

export class Status {
  isProcessed: Boolean;
  isRegistered: Boolean;
  processingMessage: String;
  registrationMessage: String;
  timestampProcessing;
  timestampRegistration;

  setProcessed(value?: Boolean) {
    this.isProcessed = (value === false) ? false : !this.isProcessed;
    this.timestampProcessing = this.setTimestamp(this.isProcessed);
    this.setProcessingMessage();
  };
  setRegistered() {
    this.isRegistered = !this.isRegistered;
    this.timestampRegistration = this.setTimestamp(this.isRegistered);
    this.setRegistrationMessage();
    this.setProcessingMessage();
    if(!this.isRegistered)
    {
      this.setProcessed(false);
    }
  };
  setProcessingMessage() {
    this.processingMessage = this.isProcessed
      ? "Processing completed on " + this.timestampProcessing
      : (this.isRegistered ? "Being Processed" : "Not Processed");
  }
  setRegistrationMessage() {
    this.registrationMessage = this.isRegistered
      ? "Registered on " + this.timestampRegistration
      : "Not Registered";
  }
  setTimestamp(value: Boolean): any{
    return value ? moment().format('LLLL') : null;
  }
}