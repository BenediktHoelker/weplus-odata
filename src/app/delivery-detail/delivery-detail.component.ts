import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

import { Delivery } from '../models/delivery.model';
import { Deviation } from '../models/deviation.model';
import { DeviationType } from '../models/deviation-type.model';
import { YardDelivery } from '../models/yard-delivery.model';

import { DeviationComponent } from '../deviation/deviation.component';
import { DeliveryService } from '../shared/delivery.service';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-delivery-detail',
  templateUrl: './delivery-detail.component.html',
  providers: [MdSnackBar]
})
export class DeliveryDetailComponent {
  @Input() delivery: Delivery;
  @Input() deliveries: Delivery[];
  @Input() deviationTypes: DeviationType[];
  @Output() removeDelivery: EventEmitter<any> = new EventEmitter();
  @Output() updateDelivery: EventEmitter<any> = new EventEmitter();

  private dialogRef: MdDialogRef<RegistrationDialogComponent>;
  public newDeliveryFocusEventEmitter = new EventEmitter<boolean>();
  private selectedTabIndex = 0;

  constructor(
    private deliveryService: DeliveryService,
    public dialog: MdDialog,
    public snackBar: MdSnackBar
  ) { }

  addDeviation(): void {
    if (!this.delivery.deviations.length) {
      this.selectedTabIndex = 2;
    }
    let newDeviation = this.deliveryService.createDeviation();
    this.delivery.deviations.push(newDeviation);
  }

  getTotalQuantity(yardDeliveries: YardDelivery[] = []): number {
    return yardDeliveries.reduce((prev, current) => prev + current.quantity, 0);
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
      if (delivery.isRegistered && !this.isOnTime(timeslotBegin, timeslotEnd, Date.now())) {
        let snackBarRef = this.snackBar.open("Delivery not on time", "Comment", {
          duration: 3000
        });
        snackBarRef.onAction().subscribe(() => {
          this.openDialog();
        });
      }
    }
  }

  isOnTime(timeslotBegin: Number, timeslotEnd: Number, now: number): Boolean {
    return (now > timeslotBegin && now < timeslotEnd);
  }
}
