import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Deviation } from '../models/deviation.model';
import { DeviationType } from '../models/deviation-type.model';

@Component({
  selector: 'wp-deviation-line',
  template: `
    <div class="flex-container" fxLayout="row" fxLayoutAlign="space-between center">
      <md-select placeholder="Type" required [(ngModel)]="deviation.type">
        <md-option *ngFor="let deviationType of optionValues"
          [value]="deviationType.name">
          {{deviationType.name}}
        </md-option>
      </md-select>
      <!--No [max]-binding, because it somehow breaks validation-->
      <md-input-container>
        <input mdInput class="form-control" type="number"
          placeholder="Gravity" [min]="1" required
          [(ngModel)]="deviation.gravity">
      </md-input-container>
      <button type="button" (click)="removeDeviation()"
        md-button><md-icon>delete</md-icon></button>
    </div>
  `,
})
export class DeviationLineComponent {
  @Input() deviation: Deviation;
  @Input() optionValues: DeviationType[];
  // @Output() toggleCheckbox = new EventEmitter<Status>();
}