import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Deviation } from '../models/deviation.model';
import { DeviationType } from '../models/deviation-type.model';

@Component({
  selector: 'wp-deviation-line',
  template: `
    <div *ngIf="deviation" class="flex-container" fxLayout="row" fxLayoutAlign="space-between center">
      <md-select placeholder="Type" required 
        [(ngModel)]="deviation.type"
        (change)="updateDeviation.emit(deviation)">
        <md-option *ngFor="let deviationType of optionValues"
          [value]="deviationType.id">
          {{deviationType.name}}
        </md-option>
      </md-select>
      <!--No [max]-binding, because it somehow breaks validation-->
      <md-input-container>
        <input mdInput class="form-control" type="number"
          placeholder="Gravity" [min]="1" required
          [(ngModel)]="deviation.gravity"
          (change)="updateDeviation.emit(deviation)">
      </md-input-container>
      <button type="button" (click)="removeDeviation.emit(deviation)"
        md-button><md-icon>delete</md-icon></button>
    </div>
  `,
})
export class DeviationLineComponent {
  @Input() deviation: Deviation;
  @Input() optionValues: DeviationType[];
  @Output() updateDeviation = new EventEmitter<Deviation>();
  @Output() removeDeviation = new EventEmitter<Deviation>();
}