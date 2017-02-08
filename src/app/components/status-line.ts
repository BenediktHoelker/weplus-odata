import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Status } from '../models/status.model';

@Component({
  selector: 'wp-status-line',
  template: `
    <h3 md-subheader>Factory</h3>
    <md-list-item *ngIf="status">
      <div md-line class="flex-container" fxLayout="row">
        <md-checkbox [(ngModel)]="status.isRegistered"
          (change)="toggleCheckbox.emit(status)">
          <span>Registered</span>
        </md-checkbox>
        <md-checkbox [(ngModel)]="status.isProcessed"
          (change)="toggleCheckbox.emit(status)">
          <span>Processed</span>
        </md-checkbox>
      </div>
    </md-list-item>
  `,
})
export class StatusLineComponent {
  @Input() status: Status;
  @Output() toggleCheckbox = new EventEmitter<Status>();

  get processingMessage(){
    return this.status.processingMessage;
  }

  get registrationMessage(){
    return this.status.registrationMessage;
  }
}