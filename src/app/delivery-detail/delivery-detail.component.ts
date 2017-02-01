import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';

import { AppState } from '../app.state';
import { Delivery } from '../models/delivery.model';
import { Deviation } from '../models/deviation.model';
import { DeviationType } from '../models/deviation-type.model';
import { Status } from '../models/status.model';
import { YardDelivery } from '../models/yard-delivery.model';

import { DeviationComponent } from '../deviation/deviation.component';
import { DeliveryService } from '../shared/delivery.service';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';

import {TOGGLE_PROCESSING, TOGGLE_REGISTRATION } from '../reducers/actions';

@Component({
  selector: 'wp-delivery-detail',
  templateUrl: './delivery-detail.component.html',
  providers: [MdSnackBar]
})
export class DeliveryDetailComponent {
  @Input() delivery: Delivery;
  @Input() deliveries: Delivery[];
  @Input() deviationTypes: DeviationType[];
  @Output() removeDelivery: EventEmitter<any> = new EventEmitter();
  @Output() updateDelivery: EventEmitter<any> = new EventEmitter();

  public newDeliveryFocusEventEmitter = new EventEmitter<boolean>();

  private dialogRef: MdDialogRef<RegistrationDialogComponent>;
  private statusIsValid: boolean;
  private processingMessage: string;
  private registrationMessage: string;
  private selectedTabIndex = 0;

  constructor(
    private deliveryService: DeliveryService,
    public dialog: MdDialog,
    public snackBar: MdSnackBar,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.statusIsValid = true;
  }

  addDeviation(): void {
    if (!this.delivery.deviations.length) {
      this.selectedTabIndex = 3;
    }
    let newDeviation = this.deliveryService.createDeviation();
    this.delivery.deviations.push(newDeviation);
  }

  toggleProcessing() {
    this.store.dispatch({type: TOGGLE_PROCESSING, payload: this.delivery.id })
  }

  toggleRegistration() {
    this.store.dispatch({type: TOGGLE_REGISTRATION, payload: this.delivery.id })
  }

  getTotalQuantity(yardDeliveries: YardDelivery[] = []): number {
    return yardDeliveries.reduce((prev, current) => prev + current.quantity, 0);
  }

  isOnTime(timeslotBegin: Number, timeslotEnd: Number, now: number): Boolean {
    return (now > timeslotBegin && now < timeslotEnd);
  }

  openDialog() {
    this.dialogRef = this.dialog.open(RegistrationDialogComponent, {
      disableClose: false,
    });
    this.dialogRef.componentInstance.deviationTypes = this.deviationTypes;
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
    });
  }

  openSnackBar(delivery: Delivery) {
    if (delivery.timeslotBegin && delivery.timeslotEnd) {
      let timeslotBegin = Date.parse(delivery.timeslotBegin.toString());
      let timeslotEnd = Date.parse(delivery.timeslotEnd.toString());
      if (!delivery.status.isRegistered && !this.isOnTime(timeslotBegin, timeslotEnd, Date.now())) {
        let snackBarRef = this.snackBar.open("Delivery not on time", "Comment", {
          duration: 3000
        });
        snackBarRef.onAction().subscribe(() => {
          this.openDialog();
        });
      }
    }
  }

  setValidity() {
    let isValid: boolean;
    isValid = this.delivery.checkValidity();
    this.statusIsValid = isValid;
  }
}
